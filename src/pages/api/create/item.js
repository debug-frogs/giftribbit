import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../graphql/mutations";

export const addItem = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomID, summary, url} = input
            /* Update Parent data */
            const createItemData = await API.graphql({
                query: mutations.createItem,
                variables: {
                    input: {
                        "classroomID": classroomID,
                        "summary": summary,
                        "url": url,
                    }
                }
            });
            return resolve(createItemData.data.createItem)
        }
        catch (error){
            reject(error)
        }
    })
}


export default async (req, res) => {
    if (req.method !== 'POST'){
        res.status(405).end()
    }
    else {
        const {API} = withSSRContext({req})
        try {
            const newItem = await addItem(API, req.body)
            res.status(200).send({
                donationID: newItem.donationID,
                id: newItem.id,
                summary: newItem.summary,
                url: newItem.url,
                _version: newItem._version
            })
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
