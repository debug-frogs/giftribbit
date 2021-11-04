import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom} from "../../../graphql/queries";
import {updateClassroom} from "../../../graphql/mutations";

export const updateClassroomPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomTeacherId, id, imageID} = input

            const getClassroomData = await API.graphql({
                query: getClassroom,
                variables: {id: id}
            });

            const classroomData = getClassroomData.data.getClassroom

            if (classroomData._deleted) {
                return reject(new Error("Classroom deleted"))
            }
            else {
                const updatedClassroomInput = {
                    classroomTeacherId: classroomData.classroomTeacherId,
                    id: classroomData.id,
                    imageID: classroomData.imageID,
                    _version: classroomData._version
                }
                if (typeof classroomTeacherId !== 'undefined') updatedClassroomInput.classroomTeacherId = classroomTeacherId
                if (typeof imageID !== 'undefined') updatedClassroomInput.imageID = imageID

                const updateClassroomData = await API.graphql({
                    query: updateClassroom,
                    variables: updatedClassroomInput
                })

                return resolve()
            }
        }
        catch (error){
            return reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'PATCH'){
        res.status(400).end()
    }
    else {
        try {
            const {API} = withSSRContext({req})
            await updateClassroomPromise(API, req.body)
            res.status(200).end()
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
