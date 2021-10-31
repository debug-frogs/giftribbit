

/**
 * @return an empty response
 */
export default withApiAuthRequired(async function revert(req, res) {
    const {user} = getSession(req, res)
    const prisma = new PrismaClient()
    const registryUid = req.query.id
    const key = req.body

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

    try {
        const objectList = await listObjects(registryUid + '/')

        let removedObjects;
        if (objectList.KeyCount)
            removedObjects = await deleteObjects(objectList.Contents.map(content => ({Key: content.Key})))

        const image = await prisma.registry.update({
            where: { uid: registryUid },
            data: {
                event:{
                    update: {
                        image_key: null
                    },
                },
            },
        })

        res.status(200).end()
    }
    catch (error) {
        console.log(error)
        res.status(405).end()
    }
    finally {
        await prisma.$disconnect();
    }
})

export const config = {
    api: {
        externalResolver: true,
    },
};
