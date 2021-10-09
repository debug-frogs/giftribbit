import React, {useContext} from 'react';
import {ProfileContext} from "../../pages/profile";
import ParentProfile from "./ParentProfile";
import TeacherProfile from "./TeacherProfile";

const Profile = () => {
    const profile = useContext(ProfileContext)

    switch (profile?.group){
        case 'parent':
            return (
                <ParentProfile />
            )
        case 'teacher':
            return (
                <TeacherProfile />
            )
        default:
            return null
    }
};

export default Profile
