import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {deleteItem} from "../../../../graphql/mutations";
import {getItem} from "../../../../graphql/queries";


export const deleteItemPromise = async (API, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getItemData = await API.graphql({
                query: getItem,
                variables: {id: id}
            })

            const itemData = getItemData.data.getItem

            if (!!itemData) {
                const deleteItemData = await API.graphql({
                    query: deleteItem,
                    variables: {
                        input: {
                            id: itemData.id,
                            _version: itemData._version
                        }
                    }
                })

                return resolve()
            }
            else {
                return reject(new Error("Item not found"))
            }
        }
        catch (error){
            return reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'DELETE'){
        res.status(400).end()
    }
    else {
        try {
            const {id} = req.query
            const {API} = withSSRContext({req})
            await deleteItemPromise(API, id)
            res.status(200).end()
        }
        catch (error) {
            console.log(error)
            res.status(405).send(error)
        }
        finally {}
    }
}

export default api
