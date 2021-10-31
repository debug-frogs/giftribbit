import {useContext} from 'react';
import {Grid, IconButton, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {NextLinkComposed} from "../../../../lib/Link";
import {FaExternalLinkAlt} from "react-icons/fa";


const Classroom = () => {
    const [profile] = useContext(ProfileContext)
    const {classroomID} = profile

    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
                <Grid
                    container
                    wrap='nowrap'
                    spacing={2}
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            style={{ fontWeight: 600 }}
                        >
                            Classroom
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            size='small'
                            color='secondary'
                            component={NextLinkComposed}
                            to={{pathname: '/classroom/' + classroomID}}
                        >
                            <FaExternalLinkAlt />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Classroom;
