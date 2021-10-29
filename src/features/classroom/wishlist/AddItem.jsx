import React, {useContext, useState} from 'react';
import {Box, Button, FormControl, Grid, Input, InputLabel, Paper, Typography} from "@mui/material";
import axios from "../../../../lib/axios";
import {ClassroomContext} from "../../../pages/classroom/[id]";


const AddItem = ({handleModalClose}) => {
    const [classroom, setClassroom] = useContext(ClassroomContext).classroom
    const {id} = classroom

    const [disabled, setDisabled] = useState(false)

    const [newItemSummary, setNewItemSummary] = useState('')
    const [newItemUrl, setNewItemUrl] = useState('')
    const [newItemDescription, setNewItemDescription] = useState('')

    const handleAddItem = async (e) => {
        e.preventDefault()

        setDisabled(true)

        const {data} = await axios.post('./api/create/item', {
            classroomID: id,
            description: newItemDescription,
            summary: newItemSummary,
            url: newItemUrl
        })
        const newClassroom = {...classroom}
        newClassroom.Items = [...newClassroom.Items, data]
        setClassroom(newClassroom)

        setNewItemSummary('')
        setNewItemUrl('')
        setNewItemDescription('')

        handleModalClose()
    }

    return (
        <Paper>
            <Box width='320px'>
                <form
                    onSubmit={handleAddItem}
                >
                    <Box p={3}>
                        <Grid
                            container
                            direction='column'
                            spacing={3}
                        >
                            <Grid item>
                                <Typography style={{ fontWeight: 600 }}>
                                    Add Item
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormControl
                                    fullWidth
                                    required
                                >
                                    <InputLabel htmlFor="item-name-input">
                                        Item name
                                    </InputLabel>
                                    <Input
                                        id="add-item-name-input"
                                        value={newItemSummary}
                                        onChange={event => setNewItemSummary(event.target.value)}
                                        autoComplete='off'
                                        inputProps={{ maxLength: 20 }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl
                                    fullWidth
                                >
                                    <InputLabel htmlFor="item-name-input">
                                        Item url
                                    </InputLabel>
                                    <Input
                                        id="add-item-url-input"
                                        value={newItemUrl}
                                        onChange={event => setNewItemUrl(event.target.value)}
                                        autoComplete='off'
                                        inputProps={{ maxLength: 62 }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl
                                    fullWidth
                                >
                                    <InputLabel htmlFor="item-name-input">
                                        Item description
                                    </InputLabel>
                                    <Input
                                        id="add-item-description-input"
                                        value={newItemDescription}
                                        onChange={event => setNewItemDescription(event.target.value)}
                                        autoComplete='off'
                                        inputProps={{ maxLength: 128 }}
                                        multiline
                                        minRows={3}
                                        maxRows={5}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button
                                    fullWidth
                                    disabled={disabled}
                                    type='submit'
                                    variant='outlined'
                                    color='secondary'
                                >
                                    Add Item
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Paper>
    );
};

export default AddItem;
