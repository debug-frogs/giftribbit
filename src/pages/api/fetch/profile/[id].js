import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getParent, getTeacher} from "../../../../graphql/queries";


export const fetchProfilePromise = (API, userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Check Parent */
            const getParentData = await API.graphql({
                query: getParent, variables: {id: userID}
            })
            if (!!getParentData.data.getParent) {
                const {child, Donations, first_name, id, last_name, teacherID} = getParentData.data.getParent

                const parentViewModel = {
                    child: child,
                    Donations: Donations.items
                        .filter(c => !c._deleted)
                        .map(c => ({id: c.id})),
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    Teacher: {},
                    type: "Parent"
                }

                if (teacherID) {
                    const getTeacherData = await API.graphql({
                        query: getTeacher,
                        variables: { id: teacherID }
                    })
                    if (getTeacherData.data.getTeacher) {
                        const teacher = getTeacherData.data.getTeacher
                        parentViewModel.Teacher = {
                            first_name: teacher.first_name,
                            last_name: teacher.last_name,
                            school: teacher.school
                        }
                    }
                }
                return resolve(parentViewModel)
            }

            /* Check Teacher */
            const getTeacherData = await API.graphql({
                query: getTeacher,
                variables: {id: userID}
            })
            if (!!getTeacherData.data.getTeacher) {
                const {classroomID, first_name, id, last_name, Parents, school} = getTeacherData.data.getTeacher

                const teacherViewModel = {
                    classroomID: classroomID,
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    Parents: Parents.items.map( parent => (
                        {
                            child: parent.child,
                            first_name: parent.first_name,
                            id: parent.id,
                            last_name: parent.last_name,
                            donationID: parent.Donations.items.find(c => !c._deleted && c.classroomID === classroomID).id
                        })),
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
