import {Auth} from "aws-amplify";


const confirm = async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        try {
            const email = req.body.email
            const code = req.body.code

            await Auth.confirmSignUp(email, code)
                .finally( res => {console.log(res)})

            res.status(200).end()
        } catch (error) {
            console.log(error)
            res.status(405).end()
        } finally {
        }
    }
};
export default confirm
