import {Fragment, useContext} from 'react';
import {Typography} from "@mui/material";
import {ClassroomContext} from "../../pages/classroom/[id]";

const ClassroomSubheader = () => {
    const [classroom] = useContext(ClassroomContext).classroom
    const {Teacher} = classroom

    return (
        <Fragment>
            <Typography variant='body1' display='inline' color='textPrimary'>
                Help support&nbsp;
            </Typography>
            <Typography variant='body1' display='inline' color='primary'>
                {Teacher.first_name} {Teacher.last_name}'s&nbsp;
            </Typography>
            <Typography variant='body1' display='inline' color='textPrimary'>
                classroom by donating items on their wishlist!
            </Typography>
        </Fragment>
    );
};

export default ClassroomSubheader;
