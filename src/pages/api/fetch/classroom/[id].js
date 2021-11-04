import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom, getParent} from "../../../../graphql/queries";


export const fetchClassroomPromise = (API, classroomID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const classroomData = await API.graphql({
                query: getClassroom,
                variables: {id: classroomID}
            })

            if (!classroomData.data.getClassroom) {
                return reject(new Error("Classroom not found"))
            }
            else {
                const {id, imageID, Donations, Items, Teacher} = classroomData.data.getClassroom

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

                const donations = Donations.items.map(async donation => {

                    const parentData = await API.graphql({
                        query: getParent,
                        variables: {id: donation.parentID}
                    })

                    const parent = parentData.data.getParent

                    return ({
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
                            first_name: parent.first_name,
                            id: parent.id,
                            last_name: parent.last_name,
                        },
                    })
                })

                /* return classroom View Model */
                return resolve({
                    id: id,
                    imageID: imageID,
                    Donations: donations,
                    Items: items,
                    Teacher: teacher,
                })
            }
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
            const {API} = withSSRContext({req});
            res.status(200).send(await fetchClassroomPromise(API, id))
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
