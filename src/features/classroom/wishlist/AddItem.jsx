import {useContext, useState} from 'react';
import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import axios from "../../../../lib/axios";


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
                                <TextField
                                    label='Item summary'
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="add-item-name-input"
                                    value={newItemSummary}
                                    onChange={event => setNewItemSummary(event.target.value)}
                                    autoComplete='off'
                                    inputProps={{ maxLength: 30 }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    label='Item url'
                                    variant="standard"
                                    id="add-item-url-input"
                                    value={newItemUrl}
                                    onChange={event => setNewItemUrl(event.target.value)}
                                    autoComplete='off'
                                    inputProps={{ maxLength: 2048 }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="add-item-description-input"
                                    label='Item description'
                                    value={newItemDescription}
                                    onChange={event => setNewItemDescription(event.target.value)}
                                    autoComplete='off'
                                    inputProps={{ maxLength: 256 }}
                                    multiline
                                    minRows={2}
                                    maxRows={5}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    id="add-item-submit-button"
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
