import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { withSSRContext} from "aws-amplify";
import {useRouter} from "next/router";
import AuthenticatorParent from "../features/auth/AuthenticatorParent";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure({
    ...config,
    ssr: true
})

const Signin = ({isUserAuthorized}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    /* protected page */
    useEffect(() => {
        if (isUserAuthorized) {
            router.push('/profile').then()
        }
    }, [])

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
            <AuthenticatorParent initialAuthState='signup'/>
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
