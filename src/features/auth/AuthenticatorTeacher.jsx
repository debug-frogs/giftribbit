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
import {Teacher} from '../../models';
import {useRouter} from "next/router";


const AuthenticatorTeacher = ({initialAuthState="signup"}) => {
    const router = useRouter()

    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (nextAuthState === 'signedin' && authData){
            router.replace('/profile').then()
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
            const schoolName = formData.attributes.school_name

            /* Create new teacher data content */
            const newTeacher = await DataStore.save(
                new Teacher({
                    "sub": userSub,
                    "email": email,
                    "first_name": firstName,
                    "last_name": lastName,
                    "school": schoolName
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
                    headerText="Teacher SignUp"
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
                            type: "school_name",
                            label: "School name *",
                            placeholder: "Enter your schools name",
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
export default AuthenticatorTeacher;
