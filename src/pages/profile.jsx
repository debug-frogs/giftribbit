import {createContext, useEffect} from "react";
import {Box, Container, Paper} from "@mui/material";
import {API, graphqlOperation, withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import theme from "../theme";
import {useRouter} from "next/router";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import {listParents, listTeachers} from "../graphql/queries";
import Profile from "../features/profile/Profile";

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
            const teachers = await API.graphql(graphqlOperation(listTeachers))
                .then( res => res?.data?.listTeachers?.items)
            const parents = await API.graphql(graphqlOperation(listParents))
                .then( res => res?.data?.listParents?.items)

            const teacher = (Array.isArray(teachers) && teachers.length) ?
                teachers.find(teacher => teacher.sub === userSub)
                : {group: 'parent'}

            const parent = (Array.isArray(parents) && parents.length) ?
                parents.find(parent => parent.sub === userSub)
                : {group: 'teacher'}

            const userAttributes = user?.attributes ? {...user.attributes, ...parent, ...teacher} : null

            console.log(userAttributes)

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
