import Amplify, {withSSRContext} from "aws-amplify";
import awsconfig from "../../../../aws-exports.js";
Amplify.configure({ ...awsconfig, ssr: true });

import S3 from 'aws-sdk/clients/s3';

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
    const {API, Auth} = withSSRContext({req});
    const classroomID = req.query.id
    const objectName = cuid() + '.jpeg'

    try {

        const credentials = await Auth.currentCredentials()
        console.log(credentials)

        const bucket = awsconfig.aws_user_files_s3_bucket
        console.log(bucket)

        const region = awsconfig.aws_user_files_s3_bucket_region
        console.log(region)

        const s3 = new S3({
            apiVersion: '2006-03-01',
            params: { Bucket: bucket },
            signatureVersion: 'v4',
            region: region,
            credentials,
        });

        console.log(s3)

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

        // const listObjects = (prefix) => {
        //     const params = {
        //         Bucket: bucket,
        //         Prefix: prefix,
        //         StartAfter: prefix,
        //     }
        //     return new Promise((resolve, reject) => {
        //         s3.listObjectsV2(params, (err, data) => {
        //             err ? reject(err) : resolve(data)
        //         })
        //     })
        // }
        //
        // const deleteObjects = (objects) => {
        //     const params = {
        //         Bucket: bucket,
        //         Delete: {
        //             Objects: objects,
        //         }
        //     }
        //     return new Promise((resolve, reject) => {
        //         s3.deleteObjects(params, (err, data) => {
        //             err ? reject(err) : resolve(data)
        //         })
        //     })
        // }

        const uploadObject = (key, stream) => {
            const params = {
                Bucket: bucket,
                Key: key,
                Body: stream,
                ContentType: 'image/jpeg'
            }
            return new Promise((resolve, reject) => {
                s3.upload(params, (err, data) => {
                    err ? reject(err) : resolve(data)
                })
            })
        }

        // const path = classroomID + '/'
        // const objectList = await Storage.list(path, {StartAfter: path})
        // console.log(objectList)

        // if (objectList.KeyCount)
        //     for (const content of objectList.Contents) {
        //         await Storage.remove(content.Key)
        //     }

        const key = await getMultipartFormImage(req)
            .then(persistentFile => fs.createReadStream(persistentFile.filepath))
            .then(readStream => uploadObject(classroomID + '/' + objectName, readStream))
            .then(result => result.Key )

        console.log(key)

        // const updateClassroomData = await API.graphql({
        //     query: mutations.updateClassroom,
        //     variables: {
        //         input: {
        //             id: classroomID,
        //             imageID: objectName
        //         }
        //     }
        // })
        // res.status(200).send(objectName)
        res.status(200).end()
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
