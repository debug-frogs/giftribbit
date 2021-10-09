import {createContext, useEffect} from "react";
import {Box, Container, Paper} from "@mui/material";
import Amplify, {withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import Profile from "../features/profile/Profile";
import {Parent, Teacher} from "../models";
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
        const {Auth} = withSSRContext(context)
        const {DataStore} = withSSRContext(context.req)

        /* get the current user from Auth*/
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

        /* get the user details form Data content */
        const userSub = user?.attributes?.sub
        const teacher = (await DataStore.query(Teacher)).find(t => t.sub === userSub)
        const parent = (await DataStore.query(Parent)).find(t => t.sub === userSub)

        /* build out the user profile object */
        const userAttributes = parent ? {...parent, group: 'parent'}
            : teacher ? {...teacher, group: 'teacher'} : {}
        // delete userAttributes.id
        delete userAttributes.createdAt
        delete userAttributes.updatedAt
        delete userAttributes._version
        delete userAttributes._lastChangedAt
        delete userAttributes._deleted

        if (parent?.teacherID) {
            const teacherData = {...(await DataStore.query(Teacher)).find(c => c.id === parent.teacherID)}
            delete teacherData.createdAt
            delete teacherData.updatedAt
            delete teacherData._version
            delete teacherData._lastChangedAt
            delete teacherData._deleted
            delete userAttributes.teacherID
            userAttributes.Teacher = teacherData
        }

        if (teacher?.id) {
            const parentsList = (await DataStore.query(Parent)).filter(c => c.teacherID === teacher.id)
            userAttributes.Parents = parentsList.map(c => {
                const p = {...c}
                delete p.createdAt
                delete p.updatedAt
                delete p._version
                delete p._lastChangedAt
                delete p._deleted
                delete p.teacherID
                return p
            })
        }

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
