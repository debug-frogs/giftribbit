import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import {getParent} from "../../../../graphql/queries";


export const fetchParentPromise = (API, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getParentData = await API.graphql({
                query: getParent,
                variables: {id: id}
            })

            if (!getParentData.data.getParent) {
                return reject(new Error("Parent not found"))
            }
            else {
                const {child, first_name, id, last_name, teacherID} = getParentData.data.getParent

                return resolve({
                    child: child,
                    first_name: first_name,
                    id: id,
                    last_name: last_name,
                    teacherID: teacherID,
                })
            }
        }
        catch (error){
            return reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'GET'){
        res.status(400).end()
    }
    else {
        try {
            const {id} = req.query
            const {API} = withSSRContext({req});
            res.status(200).send(await fetchParentPromise(API, id))
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
