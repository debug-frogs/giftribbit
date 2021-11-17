import React from 'react';
import {Box, Grid} from "@mui/material";
import {FaGraduationCap} from "react-icons/fa";
import theme from "../theme";
import {GiFrog} from "react-icons/gi";

const FrogBoi = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={0}
            alignItems='center'
        >
            <Grid item>
                <FaGraduationCap
                    color={theme.palette.primary.main}
                    size='4em'
                />
            </Grid>
            <Grid>
                <Box mt={'-39px'}>
                    <GiFrog
                        color={theme.palette.primary.main}
                        size='8em'
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default FrogBoi;
