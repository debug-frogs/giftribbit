import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });


export default async (req, res) => {
    if (req.method !== 'POST'){
        res.status(405).end()
    }
    else {
        const {Auth} = withSSRContext({req});
        try {
            const {email, password, username} = req.body

            /* Signup new user with Amplify Auth */
            const user = await Auth.signUp({
                attributes: {
                    email: email,
                },
                password: password,
                username: username
            })

            res.status(200).send(user)
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}
