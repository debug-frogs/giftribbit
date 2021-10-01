import {Auth, Logger} from "aws-amplify";


const signout = async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        const logger = new Logger('api-auth-signout')
        try {
            await Auth.signOut({ global: true })

            res.status(200).end()
        }
        catch (error) {
            console.log(error)
            logger.error(res)
            res.status(405).end()
        }
        finally {}
    }
};
export default signout
