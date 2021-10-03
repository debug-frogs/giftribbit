import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withSSRContext} from "aws-amplify";
import AuthenticatorParent from "../features/auth/AuthenticatorParent";
import {useRouter} from "next/router";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";

const SignInParent = ({isUserAuthorized}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

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
            <AuthenticatorParent initialAuthState='signin'/>
        )
    }
};

export default SignInParent;

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
