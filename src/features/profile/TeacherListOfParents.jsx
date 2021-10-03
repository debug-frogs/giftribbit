import React, {useContext} from 'react';
import {ProfileContext} from "../../pages/profile";

const TeacherListOfParents = () => {
    const {parents} = useContext(ProfileContext)
    console.log(parents)

    return null
};

export default TeacherListOfParents;
