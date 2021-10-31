import formidable from 'formidable';
import fs from 'fs'
import cuid from "cuid";

const bucket = process.env.AWS_BUCKET_NAME


/**
 * @pre ImageUpload component processes file my-file.jpeg as multipart/form-data using a POST request
 * @post file is saved as to AWS_BUCKET_NAME as RegistryUid/my-file.jpeg
 * @return unique key id my-file.jpeg in text/plain response
 */
export default withApiAuthRequired(async function process(req, res) {
    const {user} = getSession(req, res)
    const prisma = new PrismaClient()
    const registryUid = req.query.id
    const objectName = cuid() + '.jpeg'

    const getMultipartFormImage = (request) => {
        return new Promise((resolve, reject) => {
            const form = new formidable
                .IncomingForm({
                    keepExtensions: true,
                    allowEmptyFiles: false,
                    multiples: false,
                    uploadDir: '',
                    filter: function ({name, originalFilename, mimetype}) {
                        return mimetype && mimetype.includes("image");
                    }
                });

            form.parse(request, (err, fields, files) => {
                err ? reject(err) : resolve(files.image)
            })
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

    try {
        const objectList = await listObjects(registryUid + '/')

        const key = await getMultipartFormImage(req)
            .then( object => fs.createReadStream(object.path))
            .then( stream => uploadObject(registryUid + '/' + objectName, stream))
            .then( result => result.Key )

        const image = await prisma.registry.update({
            where: { uid: registryUid },
            data: {
                event:{
                    update: {
                        image_key: objectName
                    },
                },
            },
        })

        let removedObjects;
        if (objectList.KeyCount)
            removedObjects = await deleteObjects(objectList.Contents.map(content => ({Key: content.Key})))

        res.status(200).send(objectName)
    }
    catch (error) {
        console.log(error);
        res.status(405).end();
    }
    finally {
        await prisma.$disconnect();
    }
})

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
