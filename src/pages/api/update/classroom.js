import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom} from "../../../graphql/queries";
import {updateClassroom} from "../../../graphql/mutations";

export const updateClassroomPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomTeacherID, id, imageID} = input

            const classroomData = await API.graphql({
                query: getClassroom,
                variables: {id: id}
            });

            const {_deleted} = classroomData.data.getClassroom
            if (_deleted) {
                return reject(new Error("Classroom deleted"))
            }
            else {
                const updatedClassroomInput = classroomData.data.getClassroom
                if (typeof classroomTeacherID !== 'undefined') updatedClassroomInput.classroomTeacherID = classroomTeacherID
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
