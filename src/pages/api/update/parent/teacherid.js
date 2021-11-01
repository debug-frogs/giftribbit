import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../../graphql/mutations";
import * as queries from "../../../../graphql/queries";

export const updateParentTeacherID = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Update Parent data */
            const {classroomID, parentID, teacherID} = input

            const parentData = await API.graphql({
                query: queries.getParent,
                variables:
                    {
                        id: parentID
                    }
            });
            const {_version} = parentData.data.getParent

            const updateParentData = await API.graphql({
                query: mutations.updateParent,
                variables: {
                    input: {
                        id: parentID,
                        classroomID: classroomID,
                        teacherID: teacherID,
                        _version: _version
                    }
                }
            })

            const createDonation = await API.graphql({
                query: mutations.createDonation,
                variables: {
                    input: {
                        classroomID: classroomID,
                        donationParentId: parentID,
                    }
                }
            })

            const {child, first_name, id, last_name} = updateParentData.data.updateParent

            /* Return Parent ViewModel */
            return resolve({
                child: child,
                first_name: first_name,
                id: id,
                last_name: last_name,
            })
        }
        catch (error){
            reject(error)
        }
    })
}


const api = async (req, res) => {
    if (req.method !== 'POST'){
        res.status(405).end()
    }
    else {
        const {API} = withSSRContext({req})
        try {
            const parentVM = await updateParentTeacherID(API, req.body)
            res.status(200).send(parentVM)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
