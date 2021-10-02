import {createContext, useEffect} from "react";
import Profile from "../features/profile/Profile";
import {Box, Container, Paper} from "@mui/material";
import {withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import theme from "../theme";
import {useRouter} from "next/router";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";

export const ProfileContext = createContext({});

const ProfilePage = ({isUserAuthorized, userAttributes}) => {
    const router = useRouter()
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

    useEffect(() => {
        if (!isUserAuthorized) {
            router.push('/signin').then()
        }
    }, []);

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
                    <Paper
                        variant='outlined'
                        sx={{ borderColor: theme.palette.secondary.main}}
                    >
                        <Box p={3}>
                            <Profile />
                        </Box>
                    </Paper>
                </Container>
                <Container
                    maxWidth='xs'
                    sx={{ display: { sm: 'none', xs: 'block' } }}
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
            const {Auth} = withSSRContext(context)
            const user = await Auth.currentAuthenticatedUser().catch(() => null)

            return {
                props: {
                    isUserAuthorized: !!user,
                    userAttributes: user?.attributes ? user.attributes : null
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
