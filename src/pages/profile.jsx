import {createContext, useEffect} from "react";
import {Box, Container, Paper} from "@mui/material";
import {DataStore, withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import theme from "../theme";
import {useRouter} from "next/router";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import Profile from "../features/profile/Profile";
import {Parent, Teacher} from "../models";

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
            </ProfileContext.Provider>
        )
    }
}

export default ProfilePage


export async function getServerSideProps(context) {
        try {
            const {Auth} = withSSRContext(context)
            const user = await Auth.currentAuthenticatedUser().catch(() => null)
            const userSub = user?.attributes?.sub

            const [parent] = await DataStore.query(Parent, parent =>
                parent.sub === userSub
            )

            const [teacher] = await DataStore.query(Teacher, teacher =>
                teacher.sub === userSub
            )

            console.log(parent, teacher)

            const userAttributes = parent ? {...parent, group: 'parent'}
                : teacher ? {...teacher, group: 'teacher'} : {}

            userAttributes.email = user?.attributes?.email
            delete userAttributes.id
            delete userAttributes.createdAt
            delete userAttributes.updatedAt
            delete userAttributes._version
            delete userAttributes._lastChangedAt
            delete userAttributes._deleted

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
