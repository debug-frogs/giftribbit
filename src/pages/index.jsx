import Home from "../features/home/Home";
import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";

import Amplify, {withSSRContext} from "aws-amplify";
import config from "../aws-exports.js";
Amplify.configure({ ...config, ssr: true });


const index = memo(({isUserAuthorized}) => {
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    useEffect(() => {
        if (isAuthPage) {
            dispatch({type: 'auth/setIsAuthPage', payload: false})
        }
    },[])

    useEffect(() => {
        if (isUserAuthorized && !isAuthorized){
            dispatch({type: 'auth/setIsAuthorized', payload: true})
        }
        else if (!isUserAuthorized && isAuthorized) {
            dispatch({type: 'auth/setIsAuthorized', payload: false})
        }
    }, []);

    return (
        <Home/>
    )
})

export default index

export async function getServerSideProps(context) {
    try {
        const {Auth} = withSSRContext(context)
        const user = await Auth.currentAuthenticatedUser().catch(() => null)

        return {
            props: {
                isUserAuthorized: !!user,
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
