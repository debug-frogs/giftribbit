/* Amplify Params - DO NOT EDIT
	AUTH_GIFTRIBBIT_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const aws = require('aws-sdk')
const cognito = new aws.CognitoIdentityServiceProvider()


exports.handler = async (event, context, callback) => {
    const result = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
    }
    if (event.body !== null && event.body !== undefined) {
        const body = JSON.parse(event.body)
        const userEmail = body.email;
        const params = {
            UserPoolId: process.env.AUTH_GIFTRIBBIT_USERPOOLID,
            Filter: `email = \"${userEmail}\"`
        }
        await cognito.listUsers(params, (err, data) => {
            if (!err) {
                try {
                    const {Username} = data.Users[0]
                    result.statusCode = 200
                    result.body = Username
                } catch (error) {
                    result.statusCode = 404
                }
            }
        }).promise();
    }
    return result
}
