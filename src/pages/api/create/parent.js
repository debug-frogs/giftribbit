import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../graphql/mutations";


const createParent = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {email, first_name, id, last_name, child} = input

            /* Update Parent data */
            const createParentData = await API.graphql({
                query: mutations.createParent,
                variables: {
                    input: {
                        "email": email,
                        "first_name": first_name,
                        "id": id,
                        "last_name": last_name,
                        "child": child
                    }
                }
            });

            const parent = createParentData.data.createParent

            if (parent) {
                /* Return Parent ID */
                const {id} = parent
                return resolve(id)
            }
            else {
                return reject(new Error("parent not found"))
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

        try {
            const newParentID = await createParent(API, req.body)
            res.status(200).send(newParentID)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
