import React, {useContext} from 'react';
import {ProfileContext} from "../../../pages/profile";
import {Grid, Typography} from "@mui/material";
import hash from 'object-hash'


const ParentsList = () => {
    const [profile] = useContext(ProfileContext)
    const {Parents} = profile

    return (
        <Grid
            container
            direction='column'
        >
            {Parents.map( (parent) =>
                <Grid
                    item
                    key={hash(parent)}
                >
                    <Typography>
                        {parent.first_name}&nbsp;{parent.last_name}
                    </Typography>
                    <Typography>
                        parent of {parent.child}
                    </Typography>
                    <Typography>
                        {parent.email}
                    </Typography>
                </Grid>
            )}
        </Grid>
    )
};

export default ParentsList;
