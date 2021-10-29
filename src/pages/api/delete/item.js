import {withSSRContext} from "aws-amplify";

import * as mutations from "../../../graphql/mutations";

export const deleteItem = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {id, _version} = input

            /* Update Item data */
            const deleteItemData = await API.graphql({
                query: mutations.deleteItem,
                variables: {
                    input: {
                        id: id,
                        _version: _version
                    }
                }
            })

            return resolve()
        }
        catch (error){
            reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'DELETE'){
        res.status(405).end()
    }
    else {
        const {API} = withSSRContext({req});

        try {
            const deletedItem = await deleteItem(API, req.body)
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
