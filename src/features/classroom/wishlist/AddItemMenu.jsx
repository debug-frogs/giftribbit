import {useContext, useRef, useState} from 'react';
import {Box, Button, FormControl, Grid, Input, InputLabel, Paper} from "@mui/material";
import axios from "../../../../lib/axios";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import * as mutations from "../../../graphql/mutations";
import {API} from "aws-amplify";


const addItem = (input) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {classroomID, summary, url} = input

            /* Update Parent data */
            const createItemData = await API.graphql({
                query: mutations.createItem,
                variables: {
                    input: {
                        "classroomID": classroomID,
                        "summary": summary,
                        "url": url,
                    }
                }
            });

            const item = createItemData.data.createItem

            if (item) {
                /* Return Parent ID */
                const {id} = item
                return resolve(id)
            }
            else {
                return reject(new Error("item not found"))
            }
        }
        catch (error){
            reject(error)
        }
    })
}


const AddItemMenu = ({handleModalClose}) => {
    const [classroom, setClassroom] = useContext(ClassroomContext)
    const {id} = classroom

    const itemNameInput = useRef(null);
    const [itemName, setItemName] = useState('')

    const itemUrlInput = useRef(null);
    const [itemUrl, setItemUrl] = useState('')

    const handleAddItem = async (e) => {
        e.preventDefault()

        const newItem = {
            summary: itemNameInput.current.value,
            url: itemUrlInput.current.value
        }

        const newItemId = await addItem({
            "classroomID": id,
            "summary": newItem.summary,
            "url": newItem.url,
        })

        // const {data} = await axios.post('./api/create/item', {
        //     classroomID: id,
        //     item: newItem
        // })
        // newItem.id = data

        newItem.id = newItemId

        const newItems = [...classroom.Items, newItem]
        const newClassroom = {...classroom}
        newClassroom.Items = newItems
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
