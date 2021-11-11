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
                if (getParentData.data.getParent._deleted) {
                    return reject(new Error("cannot fetch a deleted Parent"))
                }

                const parentData = getParentData.data.getParent

                const classroomsPromises = parentData.Donations.items
                        .filter(c => !c._deleted)
                        .map( async c => {
                            const getClassroomData = await API.graphql({
                                query: getClassroom, variables: {id: c.classroomID}
                            })

                            const classroomData = getClassroomData.data.getClassroom

                            return ({
                                id: classroomData.id,
                                Teacher: {
                                    first_name: classroomData.Teacher.first_name,
                                    last_name: classroomData.Teacher.last_name,
                                    school: classroomData.Teacher.school
                                }})
                        })

                const classrooms = await Promise.all(classroomsPromises)

                return resolve({
                    child: parentData.child,
                    Classrooms: classrooms,
                    first_name: parentData.first_name,
                    id: parentData.id,
                    last_name: parentData.last_name,
                    type: "Parent"
                })
            }

            /* Check Teacher */
            const getTeacherData = await API.graphql({
                query: getTeacher,
                variables: {id: userID}
            })
            if (!!getTeacherData.data.getTeacher) {
                const teacherData = getTeacherData.data.getTeacher

                if (teacherData._deleted) {
                    return reject(new Error("Cannot fetch a deleted Teacher"))
                }

                const getClassroomData = await API.graphql({
                    query: getClassroom, variables: {id: teacherData.classroomID}
                })
                const classroomData = getClassroomData.data.getClassroom

                const parentPromises = classroomData.Donations.items
                    .filter(c => !c._deleted)
                    .map(async c => {
                        const getParentData = await API.graphql({
                            query: getParent, variables: {id: c.parentID}
                        })
                        const parentData = getParentData.data.getParent

                        const donations = parentData.Donations.items
                            .filter( c => !c._deleted)
                            .map( c => {
                                const items = c.Items.items
                                    .filter( c => !c._deleted)
                                    .map(c => ({
                                        id: c.id
                                    }))
                                return ({
                                    classroomID: c.classroomID,
                                    id: c.id,
                                    Items: items
                                })})

                        return ({
                            child: parentData.child,
                            Donations: donations,
                            id: parentData.id,
                            first_name: parentData.first_name,
                            last_name: parentData.last_name,
                        })
                    })

                const parents = await Promise.all(parentPromises)

                return resolve({
                    classroomID: teacherData.classroomID,
                    first_name: teacherData.first_name,
                    id: teacherData.id,
                    last_name: teacherData.last_name,
                    Parents: parents,
                    school: teacherData.school,
                    type: "Teacher"
                })
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
