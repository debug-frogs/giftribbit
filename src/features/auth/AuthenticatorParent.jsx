import {
    AmplifyAuthContainer,
    AmplifyAuthenticator,
    AmplifyConfirmSignIn,
    AmplifyForgotPassword,
    AmplifyRequireNewPassword,
    AmplifySignIn,
    AmplifySignUp
} from "@aws-amplify/ui-react";
import {Auth} from "aws-amplify";
import {useRouter} from "next/router";


const AuthenticatorParent = ({initialAuthState="signup"}) => {
    const router = useRouter()

    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (nextAuthState === 'signedin' && authData){
            router.push('/profile').then()
        }
    })

    const handleSignUp = async (formData) => {
        const param = {
            attributes: {
                email: formData.attributes.email,
            },
            password: formData.password,
            username: formData.username
        }
        return await Auth.signUp(param);
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
