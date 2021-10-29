import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import axios from "../../../../lib/axios";
import {WishlistContext} from "./Wishlist";


const RemoveItem = ({item}) => {
    const [classroom, setClassroom] = useContext(ClassroomContext).classroom
    const [disabled, setDisabled] = useState(false)

    const [removable, setRemovable] = useContext(WishlistContext).removable

    const handleRemoveItem = async () => {
        setDisabled(true)

        const removedItem = await axios.delete('/api/delete/item', {
            data: {
                id: item.id,
                _version: item._version
            }
        })

        const newClassroom = {...classroom}
        newClassroom.Items = newClassroom.Items?.filter(c => c.id !== item.id)
        newClassroom.Donations = newClassroom.Donations.map(c => {
            c.items = c.items?.filter(c => c.id !== item.id)
            return c
        })

        setClassroom(newClassroom)
        setRemovable(false)
    }

    return (
        <Paper>
            <Box width='320px'>
                <Box p={5}>
                    <Grid
                        container
                        direction='column'
                        spacing={2}
                    >
                        <Grid item>
                            <Typography style={{ fontWeight: 600 }}>
                                Remove Item
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                display='inline'
                            >
                                Are you sure you would like to remove
                            </Typography>
                            <Typography
                                display='inline'
                            >
                                &nbsp;{item.summary}
                            </Typography>
                            <Typography
                                display='inline'
                            >
                                ?
                            </Typography>
                            <hr />
                            <Typography
                                variant='caption'
                            >
                                You will also remove this item from all Gift Donations.
                                This action cannot be undone.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                fullWidth
                                disabled={disabled}
                                type='submit'
                                variant='contained'
                                color='secondary'
                                onClick={handleRemoveItem}
                            >
                                Remove Item
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    );
};

export default RemoveItem;
