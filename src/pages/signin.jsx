import React, {useEffect} from 'react';
import Authenticator from "../features/auth/Authenticator";
import {useDispatch} from "react-redux";
import {Auth} from "aws-amplify";

const SignIn = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'auth/setIsAuthorized', payload: props.isAuthorized})
        dispatch({type: 'auth/setIsAuthPage', payload: true})
    },[])

    return (
        <Authenticator initialAuthState='signin'/>
    );
};

export default SignIn;

export async function getServerSideProps(context) {
    try {
        const user = await Auth.currentAuthenticatedUser();

        return {
            props: {
                auth: {
                    isAuthorized: !!user,
                }
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {},
        }
    } finally {
    }
}
