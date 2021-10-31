import {updateClassroomImageID} from "../../update/classroom/imageid";
import {withSSRContext} from "aws-amplify";


/**
 * @return an empty response
 */
const api = async (req, res) => {
    const {API, Storage} = withSSRContext({req});
    const classroomID = req.query.id
    const key = req.body

    const listObjects = (path) => Storage.list(path, {StartAfter: path})
    const deleteObject = (key) => Storage.remove(key)

    try {
        const objectList = await listObjects(classroomID + '/')

        if (objectList.KeyCount)
            for (const content of objectList.Contents) {
                await deleteObject(content.Key)
            }

        const updateClassroom = await updateClassroomImageID(API, {
            classroomID: classroomID,
            imageID: null
        })

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
