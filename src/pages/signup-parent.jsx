import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import { withSSRContext} from "aws-amplify";
import TeacherAuthenticator from "../features/auth/TeacherAuthenticator";
import {useRouter} from "next/router";

const Signin = (props) => {
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
        <TeacherAuthenticator initialAuthState='signup'/>
    );
};

export default Signin;

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
