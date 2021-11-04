import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {createClassroom, createTeacher, updateClassroom} from "../../../graphql/mutations";


const createTeacherPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {first_name, id, last_name, school} = input

            const createClassroomData = await API.graphql({
                query: createClassroom,
                variables: {input: {}}
            })

            const classroomData = createClassroomData.data.createClassroom

            const createTeacherData = await API.graphql({
                query: createTeacher,
                variables: {
                    input: {
                        classroomID: classroomData.id,
                        first_name: first_name,
                        id: id,
                        last_name: last_name,
                        school: school
                    }
                }
            });

            const teacherData = createTeacherData.data.createTeacher

            const updateClassroomData = await API.graphql({
                query: updateClassroom,
                variables: {
                    input: {
                        id: classroomData.id,
                        classroomTeacherId: teacherData.id
                    }}
            })

            return resolve(teacherData)
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
