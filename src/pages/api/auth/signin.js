import {Auth, Logger} from "aws-amplify";


const signin = async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        const logger = new Logger('api-auth-signin')
        try {
            const email = req.body.email
            const password = req.body.password

            const user = await Auth.signIn(email, password)

            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                await Auth.completeNewPassword(user, password)
            }

            res.status(200).end()
        }
        catch (error) {
            console.log(error)
            logger.error(error)
            res.status(405).end()
        }
        finally {}
    }
};
export default signin
