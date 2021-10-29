import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../graphql/mutations";

export const updateItem = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Update Item data */
            const {description, donationID, id, summary, url, _version} = input

            const updateItemData = await API.graphql({
                query: mutations.updateItem,
                variables: {
                    input: {
                        description: description,
                        donationID: donationID,
                        id: id,
                        summary: summary,
                        url: url,
                        _version: _version
                    }
                }
            })
            return resolve(updateItemData.data.updateItem)
        }
        catch (error){
            reject(error)
        }
    })
}


export default async (req, res) => {
    if (req.method !== 'PATCH'){
        res.status(405).end()
    }
    else {
        const {API} = withSSRContext({req})
        try {
            const updatedItem = await updateItem(API, req.body)
            res.status(200).send({
                description: updatedItem.description,
                donationID: updatedItem.donationID,
                id: updatedItem.id,
                summary: updatedItem.summary,
                url: updatedItem.url,
                _version: updatedItem._version
            })
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
