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
                const {id, Donations, Items, Teacher} = getClassroom

                const teacher = {
                    first_name: Teacher.first_name,
                    id: Teacher.id,
                    last_name: Teacher.last_name,
                    school: Teacher.school
                }

                const items = Items?.items?.map( item => {
                    return({
                        donationID: item.donationID,
                        id: item.id,
                        summary: item.summary,
                        url: item.url,
                    })
                })

                const donations = Donations.items.map(donation => {
                    const items = donation.Items.items.map(item => {
                        return({
                            id: item.id,
                            summary: item.summary,
                            url: item.url,
                        })
                    })
                    return({
                        id: donation.id,
                        items: items
                    })
                })

                return resolve({
                    id: id,
                    Donations: donations,
                    Items: items,
                    Teacher: teacher,
                    extra: getClassroom
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
