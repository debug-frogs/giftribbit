import {useRef, useState} from 'react';
import {Box, Button, FormControl, Grid, Input, InputLabel, Paper} from "@mui/material";
import cuid from 'cuid'


const AddItemMenu = ({items = [], setItems = () => {}}) => {
    const itemNameInput = useRef(null);
    const [itemName, setItemName] = useState('')

    const itemUrlInput = useRef(null);
    const [itemUrl, setItemUrl] = useState('')

    const handleAddItem = (e) => {
        e.preventDefault()

        const newItem = {
            key: cuid(),
            summary: itemNameInput.current.value,
            url: itemUrlInput.current.value
        }
        setItems([...items, newItem])
        setItemName('')
        setItemUrl('')
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
                            spacing={2}
                        >
                            <Grid item>
                                <FormControl
                                    fullWidth
                                    required
                                >
                                    <InputLabel htmlFor="item-name-input">
                                        Item name
                                    </InputLabel>
                                    <Input
                                        id="item-name-input"
                                        inputRef={itemNameInput}
                                        value={itemName}
                                        onChange={event => setItemName(event.target.value)}
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
                                        id="item-url-input"
                                        inputRef={itemUrlInput}
                                        value={itemUrl}
                                        onChange={event => setItemUrl(event.target.value)}
                                        autoComplete='off'
                                        inputProps={{ maxLength: 20 }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button
                                    fullWidth
                                    type='submit'
                                    variant='outlined'
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

export default AddItemMenu;
