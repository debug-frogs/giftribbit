import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { withSSRContext} from "aws-amplify";
import AuthenticatorTeacher from "../features/auth/AuthenticatorTeacher";
import {useRouter} from "next/router";
import AuthenticatorParent from "../features/auth/AuthenticatorParent";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";

const Signin = ({isUserAuthorized}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    useEffect(() => {
        if (!isAuthPage) {
            dispatch({type: 'auth/setIsAuthPage', payload: true})
        }
    },[])

    useEffect(() => {
        if (isUserAuthorized) {
            router.push('/profile').then()
        }
    }, []);

    if (isUserAuthorized){
        return null
    }
    else {
        return (
            <AuthenticatorTeacher initialAuthState='signup'/>
        )
    }
};

export default Signin;

export async function getServerSideProps(context) {
    try {
        const {Auth} = withSSRContext(context)
        const user = await Auth.currentAuthenticatedUser().catch(() => null)

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
