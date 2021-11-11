import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useRouter} from "next/router";

const SignoutButton = () => {
    const router = useRouter()

    const handleAuthStateChange = (async (nextAuthState, authData) => {
        if (nextAuthState === 'signedout' && !authData) {
            router.reload()
        }
    })

    return(
        <AmplifySignOut handleAuthStateChange={handleAuthStateChange} />
    )
}

export default SignoutButton;
