import {AmplifyAuthContainer, AmplifyAuthenticator, AmplifyConfirmSignIn, AmplifyForgotPassword, AmplifyRequireNewPassword, AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";
import {useRouter} from "next/router";
import axios from "../../../lib/axios";
import {memo} from "react";


const handleParentSignUp = async (formData) => {
    try {
        const password = formData.password
        const username = formData.username
        const email = formData.attributes.email
        const firstName = formData.attributes.first_name
        const lastName = formData.attributes.last_name
        const child = formData.attributes.child

        /* Create a new user with Auth */
        const userData = await axios.post('/api/auth/user-signup',
            {
                password: password,
                username: username,
                email: email,
            })

        const userSub = userData.data.userSub

        /* Create new Parent data */
        const parent = await axios.post('/api/create/parent',
            {
                first_name: firstName,
                id: userSub,
                last_name: lastName,
                child: child
            })


        return userData.data
    }
    catch (error) {
        console.log(error)
        return null
    }
}


const ParentAuthenticator = memo(({initialAuthState="signup"}) => {
    const router = useRouter()

    const handleAuthStateChange = (async (nextAuthState, authData) => {
        if (nextAuthState === 'signedin' && authData) {
            router.reload()
        }
    })

    return (
        <AmplifyAuthContainer >
            <AmplifyAuthenticator
                usernameAlias="email"
                initialAuthState={initialAuthState}
                handleAuthStateChange={handleAuthStateChange}
            >
                <AmplifySignUp
                    headerText="Parent SignUp"
                    handleSignUp={handleParentSignUp}
                    slot="sign-up"
                    usernameAlias="email"
                    formFields={[
                        {
                            type: "first_name",
                            label: "First name *",
                            placeholder: "Enter your first name",
                            inputProps: { required: true },
                        },
                        {
                            type: "last_name",
                            label: "Last name *",
                            placeholder: "Enter your last name",
                            inputProps: { required: true },
                        },
                        {
                            type: "child",
                            label: "Parent of *",
                            placeholder: "Enter your child first name",
                            inputProps: { required: true },
                        },
                        {
                            type: "email",
                            label: "Email*",
                            placeholder: "Enter your email",
                            inputProps: { required: true },
                        },
                        {
                            type: "password",
                            label: "Password*",
                            placeholder: "Enter your password",
                            inputProps: { required: true },
                        },
                    ]}
                />
                <AmplifySignIn
                    headerText="Sign in to your account"
                    slot="sign-in"
                    usernameAlias="email"
                />
                <AmplifyConfirmSignIn
                    headerText="Custom Confirm Sign In"
                    slot="confirm-sign-in"
                />
                <AmplifyForgotPassword
                    headerText="Forgot Password"
                    slot="forgot-password"
                />
                <AmplifyRequireNewPassword
                    headerText="Require New Password"
                    slot="require-new-password"
                />
            </AmplifyAuthenticator>
        </AmplifyAuthContainer>
    )
})
export default ParentAuthenticator;
