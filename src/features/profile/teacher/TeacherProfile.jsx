import {Divider, Grid, Typography} from "@mui/material";
import TeacherInformation from "./TeacherInformation";
import SignoutButton from "../../auth/SignoutButton";
import TeacherClassroom from "./TeacherClassroom";
import TeacherParents from "./TeacherParents";
import {memo} from "react";

const TeacherProfile = memo(() => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Your Teacher Profile
                </Typography>
            </Grid>
            <Grid item>
                <TeacherInformation/>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <TeacherClassroom />
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <TeacherParents />
            </Grid>
            <Grid item>
                <SignoutButton />
            </Grid>
        </Grid>
    )
})

export default TeacherProfile
