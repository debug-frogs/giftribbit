import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../../graphql/mutations";

export const updateItemDonationID = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Update Item data */
            const {itemID, donationID} = input
            const updateItemData = await API.graphql({
                query: mutations.updateItem,
                variables: {
                    input: {
                        id: itemID,
                        donationID: donationID,
                    }
                }
            })

            const {id, summary, url} = updateItemData.data.updateItem

            /* Return Item ViewModel */
            return resolve({
                id: id,
                summary: summary,
                url: url,
            })
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
            const itemVM = await updateItemDonationID(API, req.body)
            res.status(200).send(itemVM)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
