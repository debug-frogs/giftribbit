import {memo, useContext} from 'react';
import {Grid, IconButton, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {NextLinkComposed} from "../../../../lib/Link";
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
        >
            <Grid item>
                <Typography
                    noLinkStyle
                    style={{textDecoration: "none", fontWeight: 600}}
                    color='secondary'
                    component={NextLinkComposed}
                    to={{pathname: '/classroom/' + classroomID}}
                >
                    Your Classroom
                </Typography>
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
