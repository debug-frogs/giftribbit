import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ParentAuthenticator from "../features/auth/ParentAuthenticator";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";

import Amplify, {withSSRContext, DataStore} from "aws-amplify";
import config from "../aws-exports.js";
Amplify.configure({ ...config, ssr: true });


const SignupParent = ({isUserAuthorized}) => {
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    useEffect(() => {
        if (!isAuthPage) {
            dispatch({type: 'auth/setIsAuthPage', payload: true})
        }
    },[])

    if (isUserAuthorized){
        return null
    }
    else {
        return (
            <ParentAuthenticator initialAuthState='signup'/>
        )
    }
};

export default SignupParent;

export async function getServerSideProps(context) {
    try {
        const {Auth} = withSSRContext(context)
        const user = await Auth.currentAuthenticatedUser().catch(() => null)

        /* protected page */
        if (user) {
            return {
                redirect: {
                    destination: '/profile',
                    permanent: false,
                },
            }
        }

        return {
            props: {
                auth: {
                    isUserAuthorized: !!user,
                }
            }
        }
    }
    catch (error) {
        console.log(error)
        return {
            props: {},
        }
    }
    finally {}
}
