import {createContext, useEffect, useState} from "react";
import {DataStore, withSSRContext} from 'aws-amplify';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthorized, selectIsAuthPage} from "../features/auth/authSlice";
import {Parent, Teacher} from "../models";
import ProfileLayout from "../features/profile/ProfileLayout";


const fetchProfile = (userSub) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [parent] = await DataStore.query(Parent, c => c.sub("eq", userSub))
            if (parent) {
                /* return Parent ViewModel */
                return resolve({
                    child: parent.child,
                    email: parent.email,
                    first_name: parent.first_name,
                    id: parent.id,
                    last_name: parent.last_name,
                    sub: parent.sub,
                    teacherID: parent.teacherID,
                    type: "Parent"
                })
            }

            const [teacher] = await DataStore.query(Teacher, c => c.sub("eq", userSub))
            if (teacher) {
                /* return Teacher ViewModel */
                return resolve({
                    email: teacher.email,
                    first_name: teacher.first_name,
                    id: teacher.id,
                    last_name: teacher.last_name,
                    Parents: (await DataStore.query(Parent))
                        .filter(c => c.teacherID === teacher.id)
                        .map(c => {
                            return {
                                child: c.child,
                                email: c.email,
                                first_name: c.first_name,
                                id: c.id,
                                last_name: c.last_name,
                                sub: c.sub,
                            }
                        }),
                    school: teacher.school,
                    sub: teacher.sub,
                    type: "Teacher"
                })
            }

            /* implied else - user not found */
            return reject(new Error("User not found"))
        }
        catch (error){
            reject(error)
        }

    })
}


export const ProfileContext = createContext({});

const ProfilePage = ({isUserAuthorized, userSub}) => {
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch()
    const isAuthPage = useSelector(selectIsAuthPage)
    const isAuthorized = useSelector(selectIsAuthorized)

    /* fetch user profile information */
    useEffect(async () => {
        fetchProfile(userSub)
            .then(profile => {
                setProfile(profile)
            })
            .catch(error => {})
    },[])

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
            return {
                props: {
                    isUserAuthorized: !!user,
                    userSub: user.attributes.sub
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
