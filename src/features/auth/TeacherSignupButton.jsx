import {Box, Button, Grid, Typography} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import {FaChalkboardTeacher} from "react-icons/fa";

const TeacherSignupButton = () => {
    return (
        <Button
            variant='outlined'
            color='secondary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/signup-teacher',}}
        >
            <Box px={2}>
                <Grid
                    container
                    justifyContent='center'
                    spacing={1}
                    wrap='nowrap'
                >
                    <Grid item>
                        <FaChalkboardTeacher
                            style={{marginTop: "3px"}}
                            fontSize='large'
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant='button'>
                            Teacher&nbsp;Signup
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Button>
    )
}

export default TeacherSignupButton;
