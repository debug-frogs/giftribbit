import {Auth, Logger} from "aws-amplify";


export default async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        const logger = new Logger('api-auth-signup')
        try {
            const email = req.body.email
            const password = req.body.password

            const {user} = await Auth.signUp({
                username: email,
                password: password
            })

            res.status(200).end()
        }
        catch (error) {
            logger.error(error)
            res.status(405).json(error)
        }
        finally {}
    }
}
