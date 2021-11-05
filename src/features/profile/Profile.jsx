import {memo, useContext} from 'react';
import {ProfileContext} from "../../pages/profile";
import ParentProfile from "./parent/ParentProfile";
import TeacherProfile from "./teacher/TeacherProfile";

const Profile = memo(() => {
    const [profile] = useContext(ProfileContext)
    console.log(profile)
    const {type} = profile

    switch (type){
        case 'Parent':
            return (
                <ParentProfile />
            )
        case 'Teacher':
            return (
                <TeacherProfile />
            )
        default:
            return null
    }
})

export default Profile
