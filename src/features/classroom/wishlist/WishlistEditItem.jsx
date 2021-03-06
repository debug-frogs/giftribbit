import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import {WishlistContext} from "./Wishlist";
import axios from "../../../../lib/axios";


const WishlistEditItem = ({item = {}}) => {
    const {description, summary, url} = item
    const [classroom, setClassroom] = useContext(ClassroomContext)

    const [editable, setEditable] = useContext(WishlistContext).editable
    const [disabled, setDisabled] = useState(false)

    const [newItemSummary, setNewItemSummary] = useState(summary)
    const [newItemUrl, setNewItemUrl] = useState(url)
    const [newItemDescription, setNewItemDescription] = useState(description)

    const handleEditItem = async (event) => {
        event.preventDefault()
        setDisabled(true)

        const updatedItem = {...item}
        updatedItem.description = newItemDescription
        updatedItem.summary = newItemSummary
        updatedItem.url = newItemUrl

        const updateItemRes = await axios.patch('./api/update/item', updatedItem)
        const newClassroom = {...classroom}
        newClassroom.Items = newClassroom.Items
            ?.filter(c => c.id !== updatedItem.id)
        newClassroom.Items.push(updatedItem)

        if (updatedItem.donationID) {
            newClassroom.Donations = newClassroom.Donations.map(c => {
                c.items = c.items?.filter(c => c.id !== updatedItem.id)
                c.items.push(updatedItem)
                return c
            })
        }

        setEditable(false)
        setClassroom(newClassroom)
    }

    return (
        <Paper>
            <Box width='320px'>
                <form
                    onSubmit={handleEditItem}
                >
                    <Box p={3}>
                        <Grid
                            container
                            direction='column'
                            spacing={3}
                        >
                            <Grid item>
                                <Typography style={{ fontWeight: 600 }}>
                                    Edit Item
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    required
                                    label='Item summary'
                                    variant='standard'
                                    id="item-name-input"
                                    value={newItemSummary}
                                    onChange={event => setNewItemSummary(event.target.value)}
                                    autoComplete='off'
                                    inputProps={{ maxLength: 30 }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    variant='standard'
                                    label='Item url'
                                    id="item-url-input"
                                    value={newItemUrl}
                                    onChange={event => setNewItemUrl(event.target.value)}
                                    autoComplete='off'
                                    inputProps={{ maxLength: 2048 }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    varisnt='outlined'
                                    label='Item description'
                                    id="item-url-input"
                                    value={newItemDescription}
                                    onChange={event => setNewItemDescription(event.target.value)}
                                    autoComplete='off'
                                    inputProps={{ maxLength: 256 }}
                                    multiline
                                    minRows={3}
                                    maxRows={5}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    fullWidth
                                    disabled={disabled}
                                    type='submit'
                                    color='secondary'
                                    variant='outlined'
                                >
                                    Save Changes
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Paper>
    );
};

export default WishlistEditItem;
