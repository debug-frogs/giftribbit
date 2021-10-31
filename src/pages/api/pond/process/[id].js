import formidable from 'formidable';
import fs from 'fs'
import cuid from "cuid";

import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
import {updateClassroomImageID} from "../../update/classroom/imageid";
Amplify.configure({ ...config, ssr: true });

const bucket = process.env.AWS_BUCKET_NAME


/**
 * @pre ImageUpload component processes file my-file.jpeg as multipart/form-data using a POST request
 * @post file is saved as to AWS_BUCKET_NAME as RegistryUid/my-file.jpeg
 * @return unique key id my-file.jpeg in text/plain response
 */
const api = async (req, res) => {
    const {API, Storage} = withSSRContext({req});
    const classroomID = req.query.id
    const objectName = cuid() + '.jpeg'

    const getMultipartFormImage = (request) => {
        return new Promise((resolve, reject) => {
            const form = new formidable
                .IncomingForm({
                    keepExtensions: true,
                    allowEmptyFiles: false,
                    multiples: false,
                    uploadDir: '',
                    filter: ({name, originalFilename, mimetype}) => mimetype && mimetype.includes("image")
                });
            form.parse(request, (err, fields, files) => err ? reject(err) : resolve(files.image))
        })
    }
    const listObjects = (path) => Storage.list(path, {StartAfter: path})
    const deleteObject = (key) => Storage.remove(key)
    const uploadObject = (key, stream) => Storage.put(key, stream, {ContentType: 'image/jpeg'})

    try {
        const objectList = await listObjects(classroomID+'/')

        const key = await getMultipartFormImage(req)
            .then(object => fs.createReadStream(object.path))
            .then(stream => uploadObject(classroomID+'/'+objectName, stream))
            .then(result => result.Key)

        const updateClassroom = await updateClassroomImageID(API, {
            classroomID: classroomID,
            imageID: objectName
        })

        if (objectList.KeyCount)
            for (const content of objectList.Contents) {
                await deleteObject(content.Key)
            }

        res.status(200).send(objectName)
    } catch (error) {
        console.log(error);
        res.status(405).end();
    } finally {
    }
}

export default api

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
