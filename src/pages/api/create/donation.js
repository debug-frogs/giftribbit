import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom} from "../../../graphql/queries";
import {createDonation} from "../../../graphql/mutations";


export const createDonationPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomID, parentID} = input

            const classroomData = await API.graphql({
                query: getClassroom,
                variables: {id: classroomID}
            })

            const {_deleted, Donations} = classroomData.data.getClassroom

            if (_deleted) {
                return reject(new Error("Classroom deleted"))
            }
            else if (!!Donations.items.filter(c => !c._deleted && c.parentID === parentID)){
                return reject(new Error("Classroom Donations must have unique parentID"))
            }
            else {
                const createdDonation = await API.graphql({
                    query: createDonation,
                    variables: {
                        input: {
                            classroomID: classroomID,
                            parentId: parentID,
                        }
                    }
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
    if (req.method !== 'POST'){
        res.status(400).end()
    }
    else {
        try {
            const {API} = withSSRContext({req})
            await createDonationPromise(API, req.body)
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
