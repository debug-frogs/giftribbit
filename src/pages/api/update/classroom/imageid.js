import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../../graphql/mutations";

export const updateClassroomImageID = async (API, input) => {
    return new Promise(async (resolve, reject) => {
        try {
            /* Update Classroom data */
            const {classroomID, imageID} = input
            const updateClassroomData = await API.graphql({
                query: mutations.updateClassroom,
                variables: {
                    input: {
                        id: classroomID,
                        imageID: imageID
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
    if (req.method !== 'POST'){
        res.status(405).end()
    }
    else {
        const {API} = withSSRContext({req})
        try {
            const parentVM = await updateClassroomImageID(API, req.body)
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
