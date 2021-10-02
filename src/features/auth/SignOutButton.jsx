import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized} from "./authSlice";

const SignOutButton = () => {

    const isAuthorized = useSelector(selectIsAuthorized)
    const dispatch = useDispatch()
    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (!authData) {
            dispatch({type: 'auth/setIsAuthorized', payload: false})
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
