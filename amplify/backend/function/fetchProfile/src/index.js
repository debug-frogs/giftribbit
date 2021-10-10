/* Amplify Params - DO NOT EDIT
	API_GIFTRIBBITAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_GIFTRIBBITAPI_GRAPHQLAPIIDOUTPUT
	API_GIFTRIBBITAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const gql = require('graphql-tag');
const AWSAppSyncClient = require('aws-appsync').default;
const AWS = require('aws-sdk');
// require('es6-promise').polyfill();
require('isomorphic-fetch');


/* Configure AppSync */
const url = process.env.API_GIFTRIBBITAPI_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;

AWS.config.update({
    region,
    credentials: new AWS.Credentials(
        process.env.AWS_ACCESS_KEY_ID,
        process.env.AWS_SECRET_ACCESS_KEY,
        process.env.AWS_SESSION_TOKEN
    ),
});
const credentials = AWS.config.credentials;

const appsyncClient = new AWSAppSyncClient(
    {
        url,
        region,
        auth: {
            type: 'AWS_IAM',
            credentials,
        },
        disableOffline: true,
    },
    {
        defaultOptions: {
            query: {
                fetchPolicy: 'network-only',
                errorPolicy: 'all',
            },
        },
    }
);

/* GraphQL Queries */
const queryUserBySub = async (sub) => {
    const query = gql(
        `query getUser{
            listParents(filter: {sub: {eq: "${sub}"}})
            {
                items {
                    id
                }
            }
            listTeachers(filter: {sub: {eq: "${sub}"}}) 
            {
                items {
                    id
                }
            }
        }`
    );

    const client = await appsyncClient.hydrated();
    const {data} = await client.query({query});
    const {listParents, listTeachers} = data

    const [user] = [...listParents.items, ...listTeachers.items]

    return user
}

const queryParentById = async (id) => {
    const query = gql(
        `
        query getParent {
            getParent(id: "${id}") {
                child
                email
                first_name
                last_name
                sub
                teacherID
            }
        }`
    );

    const client = await appsyncClient.hydrated();
    const {data} = await client.query({query});
    const {getParent} = data

    return getParent
}

const queryTeacherById = async (id) => {
    const query = gql(
        `
        query getTeacher {
            getTeacher(id: "${id}") {
                email
                first_name
                last_name
                school
                sub
                Parents {
                    items {
                        child
                        email
                        first_name
                        last_name
                    }
                }
            }
        }`
    );

    const client = await appsyncClient.hydrated();
    const {data} = await client.query({query});
    const {getTeacher} = data

    return getTeacher
}


exports.handler = async (event) => {
    const { sub } = event.pathParameters;
    const data = await queryUserBySub(sub)

    let user;
    switch (data.__typename) {
        case "Parent": {
            user = await queryParentById(data.id)
            break
        }
        case "Teacher": {
            user = await queryTeacherById(data.id)
            break
        }
    }

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(user),
    };
    return response;
};
