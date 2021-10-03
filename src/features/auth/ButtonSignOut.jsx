import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useSelector} from "react-redux";
import {selectIsAuthorized} from "./authSlice";
import {useRouter} from "next/router";
import { useState} from "react";

const ButtonSignOut = () => {
    const router = useRouter()
    const isAuthorized = useSelector(selectIsAuthorized)

    const [redirecting, setRedirecting] = useState(false)
    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (nextAuthState === 'signedout' && !authData && !redirecting){
            setRedirecting(true)
            window.addEventListener('unload', event => {localStorage.clear()})
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
