import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getItem} from "../../../graphql/queries";
import {updateItem} from "../../../graphql/mutations";

export const updateItemPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {description, donationID, id, summary, url} = input

            const getItemData = await API.graphql({
                query: getItem,
                variables: {id: id}
            });

            const itemData = getItemData.data.getItem

            if (itemData._deleted) {
                return reject(new Error("Item deleted"))
            }
            else {
                const updatedItemInput = {
                    description: itemData.description,
                    donationID: itemData.donationID,
                    id: itemData.id,
                    summary: itemData.summary,
                    url: itemData.url,
                    _version: itemData._version
                }
                if (typeof description !== 'undefined') updatedItemInput.description = description
                if (typeof donationID !== 'undefined') updatedItemInput.donationID = donationID
                if (typeof summary !== 'undefined') updatedItemInput.summary = summary
                if (typeof url !== 'undefined') updatedItemInput.url = url

                const updateItemData = await API.graphql({
                    query: updateItem,
                    variables: {
                        input: updatedItemInput
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
    if (req.method !== 'PATCH'){
        res.status(400).end()
    }
    else {
        try {
            const {API} = withSSRContext({req})
            await updateItemPromise(API, req.body)
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
