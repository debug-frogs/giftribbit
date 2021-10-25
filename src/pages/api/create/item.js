import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../graphql/mutations";

const addItem = async (API, input) => {
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

            const item = createItemData.data.createItem

            if (item) {
                /* Return Parent ID */
                const {id} = item
                return resolve(id)
            }
            else {
                return reject(new Error("item not found"))
            }
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

        const {classroomID, item} = req.body
        const {summary, url} = item

        try {
            const newItemID = await addItem(API,
                {
                    classroomID: classroomID,
                    summary: summary,
                    url: url
                })
            res.status(200).send(newItemID)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
