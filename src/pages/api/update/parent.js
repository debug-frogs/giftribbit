import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {updateParent} from "../../../graphql/mutations";
import {getParent} from "../../../graphql/queries";

export const updateParentPromise = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {child, first_name, id, last_name} = input

            const getParentData = await API.graphql({
                query: getParent,
                variables: {id: id}
            });

            const parentData = getParentData.data.getParent

            if (parentData._deleted) {
                return reject(new Error("Parent deleted"))
            }
            else {
                const updatedParentInput = {
                    child: parentData.child,
                    first_name: parentData.first_name,
                    id: parentData.id,
                    last_name: parentData.last_name,
                    _version: parentData._version
                }
                if (typeof child !== 'undefined') updatedParentInput.child = child
                if (typeof first_name !== 'undefined') updatedParentInput.first_name = first_name
                if (typeof last_name !== 'undefined') updatedParentInput.last_name = last_name

                const updatedParentData = await API.graphql({
                    query: updateParent,
                    variables: {input: updatedParentInput}
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
            await updateParentPromise(API, req.body)
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
