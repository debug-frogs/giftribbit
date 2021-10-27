import {createContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../../features/auth/authSlice";
import ClassroomLayout from "../../features/classroom/ClassroomLayout";
import axios from "../../../lib/axios";

import Amplify, {withSSRContext} from "aws-amplify";
import config from "../../aws-exports.js";
import {fetchClassroom} from "../api/fetch/classroom/[id]";
Amplify.configure({ ...config, ssr: true });


export const ClassroomContext = createContext({});

const ClassroomPage = ({isUserAuthorized, classroomData}) => {
    const [classroom, setClassroom] = useState(classroomData);

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
            <ClassroomContext.Provider value={[classroom, setClassroom]}>
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
            /* fetch classroom data */
            const classroomID = context.params.id
            const classroomData = await fetchClassroom(API, classroomID)

            return {
                props: {
                    isUserAuthorized: !!user,
                    userSub: user.attributes.sub,
                    classroomData: classroomData,
                    classroomID: classroomID
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
