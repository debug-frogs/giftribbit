import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as queries from "../../../../graphql/queries";


const fetchClassroom = (API, classroomID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const classroomData = await API.graphql({
                query: queries.getClassroom,
                variables:
                    {
                        id: classroomID
                    }
            });
            const {getClassroom} = classroomData.data

            if (getClassroom) {
                /* return Classroom ViewModel */
                const {id, Donations, Items, Parents, Teacher} = getClassroom
                const donations = Donations.items
                const items = Items.items
                const parents = Parents.items
                const teacher = {
                    first_name: Teacher.first_name,
                    id: Teacher.id,
                    last_name: Teacher.last_name,
                    school: Teacher.school
                }

                return resolve({
                    id: id,
                    Donations: donations,
                    Items: Items,
                    Parents: Parents,
                    Teacher: teacher,
                })
            }
            /* implied else - classroom not found */
            return reject(new Error("Classroom not found"))
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
            const classroomVM = await fetchClassroom(API, id)
            res.status(200).send(classroomVM)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
