import {withSSRContext} from "aws-amplify";
import awsconfig from "../../../../aws-exports.js";

import S3 from 'aws-sdk/clients/s3';


export const fetchImage = (Auth, key) => {
    return new Promise(async (resolve, reject) => {
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

        try {
            const image = await s3.getSignedUrlPromise('getObject', {
                Bucket: bucket,
                Key: key,
            })

            return resolve(image)
        }
        catch (error){
            return reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'GET'){
        res.status(405).end()
    }
    else {
        const {id} = req.query
        const {Auth} = withSSRContext({req});

        try {
            const image = await fetchImage(Auth, id)
            res.status(200).send(image)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
