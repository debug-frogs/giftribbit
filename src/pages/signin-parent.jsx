import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {withSSRContext} from "aws-amplify";
import ParentAuthenticator from "../features/auth/ParentAuthenticator";
import {useRouter} from "next/router";

const SignInParent = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'auth/setIsAuthPage', payload: true})
    },[])

    useEffect(() => {
        dispatch({type: 'auth/setIsAuthorized', payload: props.isAuthorized})
        return () => props.isAuthorized ? () => router.push('/profile') : null
    }, []);

    return (
        <ParentAuthenticator initialAuthState='signin'/>
    );
};

export default SignInParent;

export async function getServerSideProps(context) {
    try {
        const {Auth} = withSSRContext(context)
        const user = await Auth.currentAuthenticatedUser()

        return {
            props: {
                auth: {
                    isAuthorized: !!user,
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
