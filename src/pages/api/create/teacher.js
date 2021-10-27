import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../graphql/mutations";

const createTeacher = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {email, first_name, id, last_name, school} = input

            const classroomData = await API.graphql({
                query: mutations.createClassroom,
                variables: {
                    input: {}
                }
            })

            const classroomID = classroomData.data.createClassroom.id

            const teacherData = await API.graphql({
                query: mutations.createTeacher,
                variables: {
                    input: {
                        "classroomID": classroomID,
                        "email": email,
                        "first_name": first_name,
                        "id": id,
                        "last_name": last_name,
                        "school": school
                    }
                }
            });

            const teacher = teacherData.data.createTeacher

            const updateClassroomData = await API.graphql({
                query: mutations.updateClassroom,
                variables: {
                    input: {
                        id: classroomID,
                        classroomTeacherId: teacher.id
                    }
                }
            })

            /* Return Teacher ID */
            return resolve(teacher.id)
        }
        catch (error){
            reject(error)
        }
    })
}


export default async (req, res) => {
    if (req.method !== 'POST'){
        res.status(405).end()
    }
    else {
        const {API} = withSSRContext({req})

        try {
            const newTeacherID = await createTeacher(API, req.body)
            res.status(200).send(newTeacherID)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
