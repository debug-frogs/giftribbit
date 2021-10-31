import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as queries from "../../../../graphql/queries";


export const fetchClassroom = (API, Storage, classroomID) => {
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
                const {id, imageID, Donations, Items, Teacher} = getClassroom

                const teacher = {
                    first_name: Teacher.first_name,
                    id: Teacher.id,
                    last_name: Teacher.last_name,
                    school: Teacher.school
                }

                const items = Items?.items
                    ?.filter(item => !item._deleted)
                    ?.map( item =>
                    ({
                        donationID: item.donationID,
                        description: item.description,
                        id: item.id,
                        summary: item.summary,
                        url: item.url,
                        _version: item._version
                    })
                )

                const donations = Donations.items.map(donation => {
                    return({
                        id: donation.id,
                        items: donation?.Items?.items
                            ?.filter(item => !item._deleted)
                            ?.map(item =>
                                ({
                                    donationID: item.donationID,
                                    description: item.description,
                                    id: item.id,
                                    summary: item.summary,
                                    url: item.url,
                                    _version: item._version
                                })
                            ),
                        Parent: {
                            first_name: donation.Parent.first_name,
                            id: donation.Parent.id,
                            last_name: donation.Parent.last_name,
                        },
                    })
                })

                const image = imageID ? await Storage.get(id+'/'+imageID) : null

                /* return classroom View Model */
                return resolve({
                    id: id,
                    image: image,
                    Donations: donations,
                    Items: items,
                    Teacher: teacher,
                })
            }
            /* classroom not found */
            return reject(new Error("Classroom not found"))
        }
        catch (error){
            throw error
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'GET'){
        res.status(405).end()
    }
    else {
        const {id} = req.query
        const {API, Storage} = withSSRContext({req});

        try {
            const classroomVM = await fetchClassroom(API, Storage, id)
            res.status(200).send(classroomVM)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
