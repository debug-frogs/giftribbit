import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import {DonationContext} from "./Donation";
import axios from "../../../../lib/axios";


const DonationRemoveItem = ({item, handleModalClose}) => {
    const [classroom, setClassroom] = useContext(ClassroomContext)
    const [disabled, setDisabled] = useState(false)

    const [removable, setRemovable] = useContext(DonationContext).removable

    const handleRemoveItem = async () => {
        setDisabled(true)

        const updatedItem = {...item}
        updatedItem.donationID = null

        const updateItemRes = await axios.patch('./api/update/item', updatedItem)

        const newClassroom = {...classroom}
        newClassroom.Items = newClassroom.Items?.filter(c => c.id !== updatedItem.id)
        newClassroom.Items.push(updatedItem)

        if (item.donationID) {
            newClassroom.Donations = newClassroom.Donations.map(c => {
                c.items = c.items?.filter(c => c.id !== updatedItem.id)
                return c
            })
        }

        setRemovable(false)
        setClassroom(newClassroom)
    }

    return (
        <Paper>
            <Box width='320px'>
                <Box p={5}>
                    <Grid
                        container
                        direction='column'
                        spacing={3}
                    >
                        <Grid item>
                            <Typography
                                style={{ fontWeight: 600 }}
                                display='inline'
                            >
                                Remove {item.summary}?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='caption'
                            >
                                Are you sure you would like to remove this item from your donations?
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

export default DonationRemoveItem;
