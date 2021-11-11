import {AmplifyAuthContainer, AmplifyAuthenticator, AmplifyConfirmSignIn, AmplifyForgotPassword, AmplifyRequireNewPassword, AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";
import {useRouter} from "next/router";
import axios from "../../../lib/axios";


const handleTeacherSignUp = async (formData) => {
    try {
        const password = formData.password
        const username = formData.username
        const email = formData.attributes.email
        const firstName = formData.attributes.first_name
        const lastName = formData.attributes.last_name
        const schoolName = formData.attributes.school_name

        /* Create a new user with Auth */
        const {data} = await axios.post('/api/auth/user-signup',
            {
                password: password,
                username: username,
                email: email,
            })

        const userSub = data.userSub

        const teacher = await axios.post("/api/create/teacher", {
            first_name: firstName,
            id: userSub,
            last_name: lastName,
            school: schoolName
        })

        return data
    }
    catch (error) {
        console.log(error)
        return null
    }
}


const TeacherAuthenticator = ({initialAuthState="signup"}) => {
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
                    headerText="Teacher SignUp"
                    handleSignUp={handleTeacherSignUp}
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
                    hideSignUp
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
export default TeacherAuthenticator;
