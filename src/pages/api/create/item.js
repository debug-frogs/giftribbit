import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getClassroom} from "../../../graphql/queries";
import {createItem} from "../../../graphql/mutations";


export const createItemPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomID, description, summary, url} = input

            const classroomData = await API.graphql({
                query: getClassroom,
                variables: {id: classroomID}
            })

            const {_deleted} = classroomData.data.getClassroom

            if (_deleted) {
                return reject(new Error("Cannot add Item to deleted Classroom"))
            }
            else {
                const createItemData = await API.graphql({
                    query: createItem,
                    variables: {
                        input: {
                            classroomID: classroomID,
                            description: description,
                            summary: summary,
                            url: url,
                        }
                    }
                });
                return resolve(createItemData.data.createItem)
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
            const {description, donationID, id, summary, url} = await createItemPromise(API, req.body)
            res.status(200).send({
                description: description,
                donationID: donationID,
                id: id,
                summary: summary,
                url: url,
            })
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
