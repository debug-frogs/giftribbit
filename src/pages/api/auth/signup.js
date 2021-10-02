import {Auth} from "aws-amplify";


export default async (req, res) => {
    if (req.method !== 'POST')
        res.status(405).end()
    else {
        try {
            const username = req.body.email
            const email = req.body.email
            const password = req.body.password

            const {user} = await Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    preferred_username: email,
                }

            })

            console.log(user)

            res.status(200).end()
        } catch (error) {
            console.log(error)
            res.status(405).end()
        } finally {
        }
    }
}
