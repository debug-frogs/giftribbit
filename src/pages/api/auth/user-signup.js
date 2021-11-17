import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../../aws-exports.js";
Amplify.configure({ ...config, ssr: true });


const api = async (req, res) => {
    if (req.method !== 'POST'){
        res.status(400).end()
    }
    else {
        try {
            const {Auth} = withSSRContext({req});
            const {email, password, username} = req.body

            res.status(200).send(await Auth.signUp({
                attributes: {email: email},
                password: password,
                username: username
            }))
        }
        catch (error) {
            console.log(error)
            res.status(405).end()
        }
        finally {}
    }
}

export default api
