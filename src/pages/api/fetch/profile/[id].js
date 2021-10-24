import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });
import {logger} from "../../../../../lib/logger";
import * as queries from "../../../../graphql/queries";


const fetchProfile = (API, userSub) => {
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
                const {child, email, first_name, id, last_name, teacherID} = parent

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
                        last_name: teacher.last_name
                    } : null

                return resolve({
                    child: child,
                    email: email,
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
                const {classroomID, email, first_name, id, last_name, Parents, school} = teacher
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
                    email: email,
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
            throw error
        }

    })
}

export default async (req, res) => {
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
            logger.error(error)
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
