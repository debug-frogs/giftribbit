import {createContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import ProfileLayout from "../features/profile/ProfileLayout";

import Amplify, {withSSRContext} from "aws-amplify";
import config from "../aws-exports.js";
import axios from "../../lib/axios";
Amplify.configure({ ...config, ssr: true });


export const ProfileContext = createContext({});

const ProfilePage = ({isUserAuthorized, profileData}) => {
    const [profile, setProfile] = useState(profileData);

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
        const {Auth} = withSSRContext(context)

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
            const {data} = await axios.get("/api/fetch/profile/" + user.attributes.sub)

            return {
                props: {
                    isUserAuthorized: !!user,
                    profileData: data
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
