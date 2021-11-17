import {memo, useContext} from 'react';
import {Grid, IconButton} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import Link, {NextLinkComposed} from "../../../../lib/Link";
import {FaExternalLinkSquareAlt} from "react-icons/fa";


const TeacherClassroom = memo(() => {
    const [profile] = useContext(ProfileContext)
    const {classroomID} = profile

    return (
        <Grid
            container
            wrap='nowrap'
            spacing={1}
            alignItems='center'
            justifyContent='space-between'
        >
            <Grid item>
                <Link
                    style={{fontWeight: 600}}
                    underline='none'
                    color='secondary'
                    href={'/classroom/' + classroomID}
                >
                    Click here to go to your Classroom
                </Link>
            </Grid>
            <Grid item>
                <IconButton
                    size='small'
                    color='secondary'
                    component={NextLinkComposed}
                    to={{pathname: '/classroom/' + classroomID}}
                >
                    <FaExternalLinkSquareAlt />
                </IconButton>
            </Grid>
        </Grid>
    )
})

export default TeacherClassroom;
