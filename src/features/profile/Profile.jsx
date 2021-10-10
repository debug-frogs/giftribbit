import React, {useContext} from 'react';
import {ProfileContext} from "../../pages/profile";
import ParentProfile from "./ParentProfile";
import TeacherProfile from "./TeacherProfile";

const Profile = () => {
    const profile = useContext(ProfileContext)

    switch (profile?.__typename){
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
