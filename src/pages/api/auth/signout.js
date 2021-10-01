import {Auth} from "aws-amplify";


const signout = async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        try {
            await Auth.signOut({ global: true })
                .finally( res => {console.log(res)})

            res.status(200).end()
        } catch (error) {
            console.log(error)
            res.status(405).end()
        } finally {
        }
    }
};
export default signout
