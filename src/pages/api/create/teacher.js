import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {createClassroom, createTeacher, updateClassroom} from "../../../graphql/mutations";


const createTeacherPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {first_name, id, last_name, school} = input

            const classroomData = await API.graphql({
                query: createClassroom,
                variables: {input: {}}
            })

            const classroom = classroomData.data.createClassroom

            const teacherData = await API.graphql({
                query: createTeacher,
                variables: {
                    input: {
                        classroomID: classroom.id,
                        first_name: first_name,
                        id: id,
                        last_name: last_name,
                        school: school
                    }
                }
            });

            const teacher = teacherData.data.createTeacher
            classroom.classroomTeacherId = teacher.id

            const updateClassroomData = await API.graphql({
                query: updateClassroom,
                variables: {input: classroom}
            })

            return resolve(teacher)
        }
        catch (error){
            reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'POST'){
        res.status(400).end()
    }
    else {
        try {
            const {API} = withSSRContext({req})
            const {id} = await createTeacherPromise(API, req.body)
            res.status(200).send(id)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
