import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as queries from "../../../../graphql/queries";


export const fetchProfile = (API, userSub) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* fetch parent profile info */
            const parentData = await API.graphql({
                query: queries.getParent, variables:
                    {
                        id: userSub
                    }
            });
            const parent = parentData.data.getParent
            if (parent) {
                /* return Parent ViewModel */
                const {classroomID, child, first_name, id, last_name, teacherID} = parent

                /* Fetch Teacher data */
                const getTeacherData = teacherID ? await API.graphql({
                    query: queries.getTeacher,
                    variables: { id: teacherID }
                }) : {}

                const teacher = getTeacherData?.data?.getTeacher

                /* Teacher ViewModel */
                const teacherVM = teacher ?
                    {
                        first_name: teacher.first_name,
                        last_name: teacher.last_name,
                        school: teacher.school
                    } : null

                return resolve({
                    classroomID: classroomID,
                    child: child,
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    Teacher: teacherVM,
                    type: "Parent"
                })
            }

            /* fetch teacher profile info */
            const teacherData = await API.graphql({
                query: queries.getTeacher,
                variables:
                    {
                        id: userSub
                    }
            });
            const teacher = teacherData.data.getTeacher
            if (teacher) {
                /* return Teacher ViewModel */
                const {classroomID, first_name, id, last_name, Parents, school} = teacher
                const parents = Parents ? Parents.items.map( parent => {
                    return ({
                        child: parent.child,
                        first_name: parent.first_name,
                        id: parent.id,
                        last_name: parent.last_name,
                    })
                }) : []


                return resolve({
                    classroomID: classroomID,
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    Parents: parents,
                    school: school,
                    type: "Teacher"
                })
            }

            /* implied else - user not found */
            return reject(new Error("User not found"))
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
        const {API} = withSSRContext({req});

        try {
            const profileVM = await fetchProfile(API, id)
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
