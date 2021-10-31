import Amplify, {withSSRContext} from "aws-amplify";
import awsConfig from "../../../../aws-exports.js";
Amplify.configure({ ...awsConfig, ssr: true });

import formidable from 'formidable';
import fs from 'fs'
import cuid from "cuid";

import * as mutations from "../../../../graphql/mutations";


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

    try {
        const path = classroomID + '/'
        const objectList = await Storage.list(path, {StartAfter: path})
        if (objectList.KeyCount)
            for (const content of objectList.Contents) {
                await Storage.remove(content.Key)
            }

        const key = await getMultipartFormImage(req)
            .then(object => fs.createReadStream(object.path))
            .then(stream => Storage.put(classroomID + '/' + objectName, stream, {ContentType: 'image/jpeg'}))
            .then(result => result.Key)

        const updateClassroomData = await API.graphql({
            query: mutations.updateClassroom,
            variables: {
                input: {
                    id: classroomID,
                    imageID: objectName
                }
            }
        })

        res.status(200).send(objectName)
    } catch (error) {
        console.log(error);
        res.status(405).end();
    } finally {}
}

export default api

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
