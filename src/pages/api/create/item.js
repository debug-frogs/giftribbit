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
            /* Return Parent ID */
            const {id} = createItemData.data.createItem
            return resolve(id)
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
            const newItemID = await addItem(API, req.body)
            res.status(200).send(newItemID)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
