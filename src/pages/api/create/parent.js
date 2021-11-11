import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {createParent} from "../../../graphql/mutations";


const createParentPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {first_name, id, last_name, child} = input

            const createParentData = await API.graphql({
                query: createParent,
                variables: {
                    input: {
                        first_name: first_name,
                        id: id,
                        last_name: last_name,
                        child: child
                    }
                }
            })
            return resolve(createParentData.data.createParent)
        }
        catch (error){
            return reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'POST'){
        res.status(400).end()
    }
    else {
        try {
            const {API} = withSSRContext({req})
            const {id} = await createParentPromise(API, req.body)
            res.status(200).send(id)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
