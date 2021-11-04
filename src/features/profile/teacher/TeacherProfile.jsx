import {Divider, Grid, Typography} from "@mui/material";
import TeacherInformation from "./TeacherInformation";
import SignoutButton from "../../auth/SignoutButton";
import TeacherParentList from "./TeacherParentList";
import TeacherAddParent from "./TeacherAddParent";
import TeacherClassroom from "./TeacherClassroom";

const TeacherProfile = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Teacher Profile
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
                <TeacherAddParent />
                <TeacherParentList />
            </Grid>
            <Grid item>
                <SignoutButton />
            </Grid>
        </Grid>
    )
};

export default TeacherProfile
