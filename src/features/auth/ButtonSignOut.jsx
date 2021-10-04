import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useRouter} from "next/router";

const ButtonSignOut = () => {
    const router = useRouter()

    const handleAuthStateChange = ((nextAuthState, authData) => {
        if (nextAuthState === 'signedout' && !authData){
            router.reload()
        }
    })

    return(
        <AmplifySignOut handleAuthStateChange={handleAuthStateChange} />
    )
};

export default ButtonSignOut;
