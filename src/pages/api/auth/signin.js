import {Auth} from "aws-amplify";


const signin = async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        try {
            const email = req.body.email
            const password = req.body.password

            const user = await Auth.signIn(email, password)
                .finally( res => {console.log(res)})

            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                await Auth.completeNewPassword(user, password)
                    .finally( res => {console.log(res)})
            }

            res.status(200).end()
        } catch (error) {
            console.log(error)
            res.status(405).end()
        } finally {
        }
    }
};
export default signin
