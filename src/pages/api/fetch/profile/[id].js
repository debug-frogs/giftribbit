import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom, getParent, getTeacher} from "../../../../graphql/queries";


export const fetchProfilePromise = (API, userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Check Parent */
            const getParentData = await API.graphql({
                query: getParent, variables: {id: userID}
            })
            if (!!getParentData.data.getParent) {
                const {child, Donations, first_name, id, last_name} = getParentData.data.getParent

                const parentViewModel = {
                    child: child,
                    Classrooms: Donations.items
                        .filter(c => !c._deleted)
                        .map( async c => {
                            const getClassroomData = await API.graphql({
                                query: getClassroom, variables: {id: c.classroomID}
                            })
                            const {id, imageID, Donations, Items, Teacher} = getClassroomData.data.getClassroom
                            return ({
                                id: id,
                                Teacher: {
                                    first_name: Teacher.first_name,
                                    last_name: Teacher.last_name,
                                    school: Teacher.school
                                }})
                        }),
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    type: "Parent"
                }

                return resolve(parentViewModel)
            }

            /* Check Teacher */
            const getTeacherData = await API.graphql({
                query: getTeacher,
                variables: {id: userID}
            })
            if (!!getTeacherData.data.getTeacher) {
                const {classroomID, first_name, id, last_name, school} = getTeacherData.data.getTeacher

                const teacherViewModel = {
                    classroomID: classroomID,
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    school: school,
                    type: "Teacher"
                }

                return resolve(teacherViewModel)
            }
            return reject(new Error("User not found"))
        }
        catch (error){
            return reject(error)
        }
    })
}

const api = async (req, res) => {
    if (req.method !== 'GET'){
        res.status(400).end()
    }
    else {
        try {
            const {id} = req.query
            const {API} = withSSRContext({req})
            const profileVM = await fetchProfilePromise(API, id)
            res.status(200).send(profileVM)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
