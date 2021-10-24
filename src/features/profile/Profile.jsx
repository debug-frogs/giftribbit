import React, {useContext} from 'react';
import {ProfileContext} from "../../pages/profile";
import ParentProfile from "./profile_parent/ParentProfile";
import TeacherProfile from "./profile_teacher/TeacherProfile";

const Profile = () => {
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
};

export default Profile
