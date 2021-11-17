import {Fragment, memo} from 'react'
import {Typography} from "@mui/material";
import {ClassroomContext} from "../../pages/classroom/[id]";
import {useContext} from "react";

const ClassroomHeader = memo(() => {
    const [classroom] = useContext(ClassroomContext)
    const {Teacher} = classroom

    return (
        <Fragment>
            <Typography
                variant='h5'>
                Welcome to&nbsp;
            </Typography>
            <Typography
                display='inline'
                variant='h5'
                color='primary'
                noWrap
            >
                {Teacher.first_name} {Teacher.last_name}'s&nbsp;
            </Typography>
            <Typography
                display='inline'
                variant='h5'
                noWrap
            >
                classroom!
            </Typography>
        </Fragment>
    )
})

export default ClassroomHeader;
