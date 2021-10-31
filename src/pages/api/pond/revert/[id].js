import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

import * as mutations from "../../../../graphql/mutations";


/**
 * @return an empty response
 */
const api = async (req, res) => {
    const {API, Storage} = withSSRContext({req});
    const classroomID = req.query.id
    const key = req.body

    try {
        const path = classroomID + '/'
        const objectList = await Storage.list(path, {StartAfter: path})
        if (objectList.KeyCount)
            for (const content of objectList.Contents) {
                await Storage.remove(content.Key)
            }

        const updateClassroomData = await API.graphql({
            query: mutations.updateClassroom,
            variables: {
                input: {
                    id: classroomID,
                    imageID: null
                }
            }
        })

        res.status(200).end()
    }
    catch (error) {
        console.log(error)
        res.status(405).end()
    }
    finally {}
}

export default api

export const config = {
    api: {
        externalResolver: true,
    },
};
