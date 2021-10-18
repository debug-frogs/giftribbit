import {createContext, useEffect} from "react";
import {Box, Container, Paper} from "@mui/material";
import Amplify, {withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import Profile from "../features/profile/Profile";
import config from '../aws-exports'

Amplify.configure({
    ...config,
    ssr: true
})

export const ProfileContext = createContext({});

const ProfilePage = ({isUserAuthorized, userAttributes}) => {
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    useEffect(() => {
        if (isAuthPage) {
            dispatch({type: 'auth/setIsAuthPage', payload: false})
        }
    },[])

    useEffect(() => {
        if (isUserAuthorized && userAttributes && !isAuthorized) {
            dispatch({type: 'auth/setIsAuthorized', payload: true})
        }
        else if (!isUserAuthorized && userAttributes && isAuthorized){
            dispatch({type: 'auth/setIsAuthorized', payload: false})
        }
    },[])

    if (!isUserAuthorized) {
        return null
    }
    else {
        return (
            <ProfileContext.Provider value={userAttributes}>
                <Container
                    sx={{ display: { sm: 'block', xs: 'none' } }}
                    maxWidth='xs'
                >
                    <Paper>
                        <Box p={3}>
                            <Profile />
                        </Box>
                    </Paper>
                </Container>
                <Container
                    sx={{ display: { sm: 'none', xs: 'block' } }}
                    maxWidth='xs'
                >
                    <Profile />
                </Container>
            </ProfileContext.Provider>
        )
    }
}

export default ProfilePage


export async function getServerSideProps(context) {
    try {
        const {Auth, API} = withSSRContext(context)

        /* get the current user from Auth */
        const user = await Auth.currentAuthenticatedUser().catch(() => null)

        /* protected page */
        if (!user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }

        const sub = user.attributes.sub
        const userAttributes = await API.get("fetchprofileapi", `/fetchprofile/${sub}`)

        return {
            props: {
                isUserAuthorized: !!user,
                userAttributes: user?.attributes ? userAttributes : null
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
