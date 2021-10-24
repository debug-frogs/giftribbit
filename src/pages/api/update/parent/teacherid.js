import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../../graphql/mutations";


const updateParentTeacherID = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Update Parent data */
            const {parentID, teacherID} = input
            const updateParentData = await API.graphql({
                query: mutations.updateParent,
                variables: {
                    input: {
                        id: parentID,
                        teacherID: teacherID
                    }
                }
            })

            const parent = updateParentData.data.updateParent
            if (parent) {
                /* Return Parent ViewModel */
                const {child, first_name, id, last_name} = parent
                return resolve({
                    child: parent.child,
                    first_name: parent.first_name,
                    id: parent.id,
                    last_name: parent.last_name,
                })
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
            const {parentID, teacherID} = req.body
            const parentVM = await updateParentTeacherID(API, parentID, teacherID)
            res.status(200).send(parentVM)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
