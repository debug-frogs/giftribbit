import {withSSRContext} from "aws-amplify";

import {deleteDonation} from "../../../../graphql/mutations";
import {getDonation} from "../../../../graphql/queries";


export const deleteDonationPromise = async (API, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getDonationData = await API.graphql({
                query: getDonation,
                variables: {id: id}
            })

            const donationData = getDonationData.data.getDonation

            if (!!donationData) {
                const deleteDonationData = await API.graphql({
                    query: deleteDonation,
                    variables: {
                        input: {
                            id: donationData.id,
                            _version: donationData._version
                        }}
                })

                return resolve()
            }
            else {
                reject(new Error("Donation not found"))
            }
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
            const {id} = req.query
            const {API} = withSSRContext({req})
            await deleteDonationPromise(API, id)
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
