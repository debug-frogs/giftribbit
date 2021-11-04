import {createContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../../features/auth/authSlice";
import ClassroomLayout from "../../features/classroom/ClassroomLayout";

import {fetchClassroomPromise} from "../api/fetch/classroom/[id]";
import {fetchProfilePromise} from "../api/fetch/profile/[id]";

import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../aws-exports.js";
import {fetchImage} from "../api/fetch/image/[id]";
Amplify.configure({ ...config, ssr: true });


export const ClassroomContext = createContext({});

const ClassroomPage = ({isUserAuthorized, classroomData, profileData}) => {
    const [classroom, setClassroom] = useState(classroomData)
    const [profile, setProfile] = useState(profileData)

    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    /* indicate that this is not a login or signup page */
    useEffect(() => {
        if (isAuthPage) {
            dispatch({type: 'auth/setIsAuthPage', payload: false})
        }
    },[])

    /* indicate that the user is authorized */
    useEffect(() => {
        if (isUserAuthorized && !isAuthorized) {
            dispatch({type: 'auth/setIsAuthorized', payload: true})
        }
    },[])

    if (!isUserAuthorized || !Object.keys(classroom).length){
        return null
    }
    else {
        return (
            <ClassroomContext.Provider value={{
                "classroom": [classroom, setClassroom],
                "profile": [profile, setProfile]
            }}>
                <ClassroomLayout />
            </ClassroomContext.Provider>
        )
    }

}

export default ClassroomPage

export async function getServerSideProps(context) {
    try {
        const {Auth, API} = withSSRContext(context)

        /* get the current user from Auth */
        const user = await Auth.currentAuthenticatedUser().catch(() => null)

        /* protected page - redirect if user is not authorized */
        if (!user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
        else {
            const classroomID = context.params.id
            const classroomData = await fetchClassroomPromise(API, classroomID)

            if (classroomData.imageID) {
                const key = classroomID + '/' + classroomData.imageID
                classroomData.image = await fetchImage(Auth, key)
            }

            const userSub = user.attributes.sub
            const profileData = await fetchProfilePromise(API, userSub)

            return {
                props: {
                    isUserAuthorized: !!user,
                    classroomData: classroomData,
                    profileData: profileData
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
