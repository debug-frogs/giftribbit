import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";

export const createDonation = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomID, parentID} = input

            /* Check if Donation with ParentID already exists in this Classroom */
            const classroomData = await API.graphql({
                query: queries.getClassroom,
                variables:
                    {
                        id: classroomID
                    }
            })

            const classroom = classroomData.data.getClassroom

            if (!!classroom.Donations.items.filter(c => !c._deleted && c.parentID === parentID)){
                return reject(new Error("Classroom Donations must have a unique parentID"))
            }
            else {
                const createDonation = await API.graphql({
                    query: mutations.createDonation,
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
        const {API} = withSSRContext({req})
        try {
            await createDonation(API, req.body)
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
