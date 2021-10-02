import React, {useEffect} from "react";
import {Auth} from "aws-amplify";
import {useDispatch} from "react-redux";
import Authenticator from "../features/auth/Authenticator";

const signup = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'auth/setIsAuthorized', payload: props.isAuthorized})
        dispatch({type: 'auth/setIsAuthPage', payload: true})
    },[])

    return (
        <Authenticator initialAuthState='signup'/>
    )
};

export default signup

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
