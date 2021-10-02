import {Grid, Typography} from "@mui/material";
import {FaHeartBroken} from "react-icons/fa";
import theme from "../theme";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const Custom404 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'auth/setIsAuthPage', payload: false})
    },[])

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
