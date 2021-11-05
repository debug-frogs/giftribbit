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
                const parentData = getParentData.data.getParent

                const donations = parentData.Donations.items
                    .filter( c => !c._deleted)
                    .map( c => {
                        const items = c.Items.items
                            .filter(c => !c._deleted)
                            .map(c => ({id: c.id,}))

                        return ({
                            classroomID: c.classroomID,
                            id: c.id,
                            Items: items
                        })
                    })

                return resolve({
                    child: parentData.child,
                    Donations: donations,
                    first_name: parentData.first_name,
                    id: parentData.id,
                    last_name: parentData.last_name,
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
