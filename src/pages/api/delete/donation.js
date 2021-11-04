import {withSSRContext} from "aws-amplify";

import {deleteDonation} from "../../../graphql/mutations";


export const deleteDonationPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {id, _version} = input

            const deleteDonationData = await API.graphql({
                query: deleteDonation,
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
        res.status(400).end()
    }
    else {
        try {
            const {API} = withSSRContext({req})
            await deleteDonationPromise(API, req.body)
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
