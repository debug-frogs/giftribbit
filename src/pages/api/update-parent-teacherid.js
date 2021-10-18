import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../aws-exports.js";
import {Parent, Teacher} from "../../models";
Amplify.configure({ ...config, ssr: true });


export default async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        const {DataStore} = withSSRContext({req});
        try {
            const {body} = req
            const {id, parentEmail} = body

            /* Update a parent teacher relationship */
            const teacher = (await DataStore.query(Teacher, id))
            const parent = (await DataStore.query(Parent)).find(c => c.email === parentEmail)

            if (!parent.teacherID) {
                /* update parent in Data */
                await DataStore.save(
                    Parent.copyOf(parent, updated => {
                        updated.teacherID = teacher.id
                    })
                )
                res.status(200).send(parent);
            }
            else {
                res.status(403).end();
            }
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
