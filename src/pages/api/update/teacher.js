import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {updateTeacher} from "../../../graphql/mutations";
import {getTeacher} from "../../../graphql/queries";

export const updateTeacherPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {first_name, id, last_name, school} = input

            const getTeacherData = await API.graphql({
                query: getTeacher,
                variables: {id: id}
            });

            const teacherData = getTeacherData.data.getTeacher

            if (teacherData._deleted) {
                return reject(new Error("Teacher deleted"))
            }
            else {
                const updatedTeacherInput = {
                    first_name: teacherData.first_name,
                    id: teacherData.id,
                    last_name: teacherData.last_name,
                    school: teacherData.school,
                    _version: teacherData._version
                }
                if (typeof first_name !== 'undefined') updatedTeacherInput.first_name = first_name
                if (typeof last_name !== 'undefined') updatedTeacherInput.last_name = last_name
                if (typeof school !== 'undefined') updatedTeacherInput.school = school

                const updatedTeacherData = await API.graphql({
                    query: updateTeacher,
                    variables: {input: updatedTeacherInput}
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
            await updateTeacherPromise(API, req.body)
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
