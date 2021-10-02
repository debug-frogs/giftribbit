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
import {useDispatch} from "react-redux";


const Authenticator = ({initialAuthState="signup"}) => {

    const dispatch = useDispatch()
    const handleAuthStateChange = ((nextAuthState, authData) => {
        console.log(nextAuthState)
        if (authData && nextAuthState === 'signedin') {
            dispatch({type: 'auth/setIsAuthorized', payload: true})
        }
    });

    const handleSignUp = async (formData) => {
        const param = {
            ...formData,
            attributes: {
                ...formData.attributes,
            }
        }
        console.log(formData)
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
                    headerText="Create a new account"
                    handleSignUp={handleSignUp}
                    slot="sign-up"
                    usernameAlias="email"
                    formFields={[
                        {
                            type: "email",
                            label: "Email*",
                            placeholder: "Enter your email",
                            inputProps: { required: true, autocomplete: "username" },
                        },
                        {
                            type: "password",
                            label: "Password*",
                            placeholder: "Enter your password",
                            inputProps: { required: true, autocomplete: "new-password" },
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
export default Authenticator;
