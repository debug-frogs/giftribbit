import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized} from "./authSlice";
import {useRouter} from "next/router";

const SignOutButton = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthorized = useSelector(selectIsAuthorized)

    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (!authData) {
            router.push('/').then(() => dispatch({type: 'auth/setIsAuthorized', payload: false}))
        }
    });

    if (isAuthorized) {
        return (
            <AmplifyAuthenticator handleAuthStateChange={handleAuthStateChange}>
                <AmplifySignOut />
            </AmplifyAuthenticator>
        )
    }
    else {
        return null
    }
};

export default SignOutButton;
