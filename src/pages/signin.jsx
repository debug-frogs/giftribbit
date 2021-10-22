import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { withSSRContext} from "aws-amplify";
import TeacherAuthenticator from "../features/auth/TeacherAuthenticator";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";


const Signin = ({isUserAuthorized}) => {
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
            <TeacherAuthenticator initialAuthState='signin'/>
        )
    }
};

export default Signin;

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
