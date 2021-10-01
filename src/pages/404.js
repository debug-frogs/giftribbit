import {Grid, Typography} from "@mui/material";
import {FaHeartBroken} from "react-icons/fa";
import theme from "../theme";
import {Auth} from "aws-amplify";

const Custom404 = () => {

    return (
        <Grid
            container
            direction='column'
            spacing={3}
            alignItems='center'
        >
            <Grid item>
                <FaHeartBroken
                    color={theme.palette.primary.main}
                    size='10em'
                />
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            variant='h1'
                            color='primary'
                        >
                            404
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='subtitle1'
                            color='secondary'
                        >
                            Page not found
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Custom404;
