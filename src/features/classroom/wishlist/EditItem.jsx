import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import {WishlistContext} from "./Wishlist";
import {updateItem} from "../../../pages/api/update/item";
import {API} from "aws-amplify";
// import axios from "../../../../lib/axios";


const EditItem = ({item = {}}) => {
    const {description, donationID, id, summary, url, _version} = item
    const [classroom, setClassroom] = useContext(ClassroomContext).classroom

    const [editable, setEditable] = useContext(WishlistContext).editable
    const [disabled, setDisabled] = useState(false)

    const [newItemSummary, setNewItemSummary] = useState(summary)
    const [newItemUrl, setNewItemUrl] = useState(url)
    const [newItemDescription, setNewItemDescription] = useState(description)

    const handleEditItem = async (event) => {
        event.preventDefault()
        setDisabled(true)

        const updatedItem = {
            description: newItemDescription,
            donationID: donationID,
            id: id,
            summary: newItemSummary,
            url: newItemUrl,
            _version: _version
        }

        // const {data} = await axios.patch('./api/update/item', updatedItem)
        /* FIX THIS */
        const updateItem = await updateItem(API, updatedItem)
        const data = {
            description: updateItem.description,
            donationID: updateItem.donationID,
            id: updateItem.id,
            summary: updateItem.summary,
            url: updateItem.url,
            _version: updateItem._version
        }
        /* */

        const newClassroom = {...classroom}
        newClassroom.Items = newClassroom.Items
            ?.filter(c => c.id !== item.id)
        newClassroom.Items.push(data)

        if (item.donationID) {
            newClassroom.Donations = newClassroom.Donations.map(c => {
                c.items = c.items?.filter(c => c.id !== item.id)
                c.items.push(data)
                return c
            })
        }

        setClassroom(newClassroom)

        setEditable(false)
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
                                    inputProps={{ maxLength: 20 }}
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
                                    inputProps={{ maxLength: 64 }}
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
                                    inputProps={{ maxLength: 128 }}
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

export default EditItem;
