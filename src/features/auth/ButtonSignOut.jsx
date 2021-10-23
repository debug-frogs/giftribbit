import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useRouter} from "next/router";
import {DataStore} from "aws-amplify";

const ButtonSignOut = () => {
    const router = useRouter()

    const handleAuthStateChange = (async (nextAuthState, authData) => {
        if (nextAuthState === 'signedout' && !authData) {
            await DataStore.clear()
            router.reload()
        }
    })

    return(
        <AmplifySignOut handleAuthStateChange={handleAuthStateChange} />
    )
};

export default ButtonSignOut;
