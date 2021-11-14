import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom, getParent} from "../../../../graphql/queries";


export const fetchClassroomPromise = (API, classroomID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getClassroomData = await API.graphql({
                query: getClassroom,
                variables: {id: classroomID}
            })

            if (!getClassroomData.data.getClassroom) {
                return reject(new Error("Classroom not found"))
            }
            else {
                const classroomData = getClassroomData.data.getClassroom

                const teacher = {
                    first_name: classroomData.Teacher.first_name,
                    id: classroomData.Teacher.id,
                    last_name: classroomData.Teacher.last_name,
                    school: classroomData.Teacher.school
                }

                const items = classroomData.Items.items
                    .filter(item => !item._deleted)
                    .map( item => (
                        {
                            donationID: item.donationID,
                            description: item.description,
                            id: item.id,
                            summary: item.summary,
                            url: item.url,
                        }))

                const donationPromises = classroomData.Donations.items
                    .filter( donation => !donation._deleted)
                    .map(async donation => {

                        const items = donation.Items.items
                            .filter(item => !item._deleted)
                            .map(item =>
                                ({
                                    donationID: item.donationID,
                                    description: item.description,
                                    id: item.id,
                                    summary: item.summary,
                                    url: item.url,
                                })
                            )

                        const getParentData = await API.graphql({
                            query: getParent,
                            variables: {id: donation.parentID}
                        })

                        const parentData = getParentData.data.getParent

                        const parent = parentData ? {
                            id: parentData.id,
                            first_name: parentData.first_name,
                            last_name: parentData.last_name
                        } : null

                        return ({
                            id: donation.id,
                            items: items.filter(c => c),
                            Parent: parent
                        })
                    })

                const donations = await Promise.all(donationPromises)

                /* return classroom View Model */
                return resolve({
                    id: classroomData.id,
                    imageID: classroomData.imageID,
                    Donations: donations,
                    Items: items.filter(c => c),
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
            const classroomData = await fetchClassroomPromise(API, id)
            res.status(200).send(classroomData)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
