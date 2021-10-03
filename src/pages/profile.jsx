import {createContext, useEffect, useState} from "react";
import {Box, Container, Paper} from "@mui/material";
import {graphqlOperation, withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import theme from "../theme";
import {useRouter} from "next/router";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import Profile from "../features/profile/Profile";
import {Parent, Teacher} from "../models";
import {listParents, listTeachers} from "../graphql/queries";

export const ProfileContext = createContext({});

const ProfilePage = ({isUserAuthorized, userAttributes}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    useEffect(() => {
        if (!isUserAuthorized && !isAuthorized) {
            window.addEventListener('unload', event => {localStorage.clear()})
            router.push('/').then()
        }
    }, []);

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
            const {API, Auth} = withSSRContext(context)

            const user = await Auth.currentAuthenticatedUser().catch(() => null)
            const userSub = user?.attributes?.sub

            const teacherData = await API.graphql(graphqlOperation(listTeachers));
            const parentData = await API.graphql(graphqlOperation(listParents));

            const teachers = teacherData?.data?.listTeachers?.items
            const parents = parentData?.data?.listParents?.items

            const teacher = Array.isArray(teachers) ? teachers.find(t => t.sub === userSub) : null
            const parent = Array.isArray(parents) ? parents.find(t => t.sub === userSub) : null

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
