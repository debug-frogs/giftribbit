import {
    AmplifyAuthContainer,
    AmplifyAuthenticator,
    AmplifyConfirmSignIn,
    AmplifyForgotPassword,
    AmplifyRequireNewPassword,
    AmplifySignIn,
    AmplifySignUp
} from "@aws-amplify/ui-react";
import {Auth, DataStore} from "aws-amplify";
import {useRouter} from "next/router";
import {Parent} from "../../models";


const AuthenticatorParent = ({initialAuthState="signup"}) => {
    const router = useRouter()

    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (nextAuthState === 'signedin' && authData){
            router.push('/profile').then()
        }
    })

    const handleSignUp = async (formData) => {
        try {
            const password = formData.password
            const username = formData.username
            const email = formData.attributes.email

            const param = {
                attributes: {
                    email: email,
                },
                password: password,
                username: username
            }

            /* Signup new user with Amplify Auth*/
            const user =  await Auth.signUp(param)

            const userSub = user.userSub
            const firstName = formData.attributes.first_name
            const lastName = formData.attributes.last_name

            /* Create a new parent data content */
            const newParent = await DataStore.save(
                new Parent({
                    "sub": userSub,
                    "first_name": firstName,
                    "last_name": lastName,
                })
            )

            return user
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

    return (
        <AmplifyAuthContainer >
            <AmplifyAuthenticator
                usernameAlias="email"
                initialAuthState={initialAuthState}
                handleAuthStateChange={handleAuthStateChange}
            >
                <AmplifySignUp
                    headerText="Parent SignUp"
                    handleSignUp={handleSignUp}
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
}
export default AuthenticatorParent;
