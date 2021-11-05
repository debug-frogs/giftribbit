import {createContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import ProfileLayout from "../features/profile/ProfileLayout";
import {fetchProfilePromise} from "./api/fetch/profile/[id]";

import Amplify, {withSSRContext} from "aws-amplify";
import config from "../aws-exports.js";
Amplify.configure({ ...config, ssr: true });

export const ProfileContext = createContext({});


const ProfilePage = ({isUserAuthorized, profileData}) => {
    const [profile, setProfile] = useState(profileData);
    console.log(profile)

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

    if (!isUserAuthorized || !Object.keys(profile).length) {
        return null
    }
    else {
        return (
            <ProfileContext.Provider value={[profile, setProfile]}>
                <ProfileLayout />
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
            const userSub = user.attributes.sub
            const userEmail = user.attributes.email
            const profileData = await fetchProfilePromise(API, userSub)
            profileData.email = userEmail

            return {
                props: {
                    isUserAuthorized: !!user,
                    profileData: profileData,
                    userSub: userSub
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
