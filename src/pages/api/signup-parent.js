import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../aws-exports.js";
import {Parent} from "../../models";
Amplify.configure({ ...config, ssr: true });


export default async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        const {Auth, DataStore} = withSSRContext({req});
        try {
            const {body} = req

            const param = {
                attributes: {
                    email: body.email,
                },
                password: body.password,
                username: body.username
            }

            /* Signup new user with Amplify Auth */
            const user = await Auth.signUp(param)
            const userSub = user.userSub

            /* Create a new parent data content */
            const newParent = await DataStore.save(
                new Parent({
                    "sub": userSub,
                    "email": body.email,
                    "first_name": body.firstName,
                    "last_name": body.lastName,
                    "child": body.child,
                })
            )

            res.status(200).send(user)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
