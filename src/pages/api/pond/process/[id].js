import Amplify, {withSSRContext} from "aws-amplify";
import awsconfig from "../../../../aws-exports.js";
Amplify.configure({ ...awsconfig, ssr: true });

import S3 from 'aws-sdk/clients/s3';

import formidable from 'formidable';
import fs from 'fs'
import cuid from "cuid";

import * as mutations from "../../../../graphql/mutations";
import * as queries from "../../../../graphql/queries";


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
        const {accessKeyId, secretAccessKey, sessionToken} = credentials

        const bucket = awsconfig.aws_user_files_s3_bucket
        const region = awsconfig.aws_user_files_s3_bucket_region

        const s3 = new S3({
            accessKeyId: accessKeyId,
            region: region,
            secretAccessKey: secretAccessKey,
            sessionToken: sessionToken
        });

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

        const listObjects = (prefix) => {
            const params = {
                Bucket: bucket,
                Prefix: prefix,
                StartAfter: prefix,
            }
            return new Promise((resolve, reject) => {
                s3.listObjectsV2(params, (err, data) => {
                    err ? reject(err) : resolve(data)
                })
            })
        }

        const deleteObjects = (objects) => {
            const params = {
                Bucket: bucket,
                Delete: {
                    Objects: objects,
                }
            }
            return new Promise((resolve, reject) => {
                s3.deleteObjects(params, (err, data) => {
                    err ? reject(err) : resolve(data)
                })
            })
        }

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

        const {KeyCount, Contents} = await listObjects(classroomID + '/')
        const removedObjects = KeyCount ? await deleteObjects(Contents.map(content => ({Key: content.Key}))) : undefined

        const key = await getMultipartFormImage(req)
            .then(persistentFile => fs.createReadStream(persistentFile.filepath))
            .then(readStream => uploadObject(classroomID + '/' + objectName, readStream))
            .then(result => result.Key )

        const classroomData = await API.graphql({
            query: queries.getClassroom,
            variables:
                {
                    id: classroomID
                }
        });
        const {_version} = classroomData.data.getClassroom

        const updateClassroomData = await API.graphql({
            query: mutations.updateClassroom,
            variables: {
                input: {
                    id: classroomID,
                    imageID: objectName,
                    _version: _version
                }
            }
        })
        res.status(200).send(objectName)
    } catch (error) {
        console.log(error);
        res.status(405).send(error);
    } finally {}
}

export default api

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
