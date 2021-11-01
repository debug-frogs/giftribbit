import Amplify, {withSSRContext} from "aws-amplify";
import awsConfig from "../../../../aws-exports.js";
Amplify.configure({ ...awsConfig, ssr: true });

import * as mutations from "../../../../graphql/mutations";
import awsconfig from "../../../../aws-exports";
import S3 from "aws-sdk/clients/s3";


/**
 * @return an empty response
 */
const api = async (req, res) => {
    const {API, Auth} = withSSRContext({req});
    const classroomID = req.query.id

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

        const {KeyCount, Contents} = await listObjects(classroomID + '/')
        const removedObjects = KeyCount ? await deleteObjects(Contents.map(content => ({Key: content.Key}))) : undefined

        const updateClassroomData = await API.graphql({
            query: mutations.updateClassroom,
            variables: {
                input: {
                    id: classroomID,
                    imageID: 'test'
                }
            }
        })

        console.log(updateClassroomData)

        res.status(200).end()
    }
    catch (error) {
        console.log(error)
        res.status(405).end()
    }
    finally {}
}

export default api

export const config = {
    api: {
        externalResolver: true,
    },
};
