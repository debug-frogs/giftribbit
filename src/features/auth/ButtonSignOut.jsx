import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";
import {selectIsAuthorized} from "./authSlice";
import {useRouter} from "next/router";

const ButtonSignOut = () => {
    const router = useRouter()
    const isAuthorized = useSelector(selectIsAuthorized)

    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (nextAuthState === 'signedout' && !authData){
            router.push('/').then()
        }
    })

    if (!isAuthorized) {
        return null
    }
    else {
        return (
            <AmplifySignOut handleAuthStateChange={handleAuthStateChange} />
        )
    }
};

export default ButtonSignOut;
