import {createContext, useEffect} from "react";
import Profile from "../features/profile/Profile";
import {Box, Container, Paper} from "@mui/material";
import {withSSRContext} from 'aws-amplify';
import {useDispatch} from "react-redux";
import theme from "../theme";
import {useRouter} from "next/router";

export const ProfileContext = createContext({});

const ProfilePage = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'auth/setIsAuthPage', payload: false})
    },[])

    useEffect(() => {
        dispatch({type: 'auth/setIsAuthorized', payload: props.isAuthorized})
        return () => !props.isAuthorized ? () => router.push('/signin') : null
    }, []);

    return (
        <ProfileContext.Provider value={props.profile}>
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

export default ProfilePage


export async function getServerSideProps(context) {
        try {
            const {Auth} = withSSRContext(context)
            const user = await Auth.currentAuthenticatedUser()

            return {
                props: {
                    isAuthorized: !!user,
                    profile: {
                        sub: user?.attributes?.sub,
                        email: user?.attributes?.email,
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
