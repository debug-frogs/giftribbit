import {AmplifySignOut} from "@aws-amplify/ui-react";
import {useRouter} from "next/router";
import {memo} from "react";

const SignoutButton = memo(() => {
    const router = useRouter()

    const handleAuthStateChange = (async (nextAuthState, authData) => {
        if (nextAuthState === 'signedout' && !authData) {
            router.reload()
        }
    })

    return(
        <AmplifySignOut handleAuthStateChange={handleAuthStateChange} />
    )
})

export default SignoutButton;
