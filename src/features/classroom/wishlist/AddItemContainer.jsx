import {useContext, useState} from "react";
import AddItemMenu from "./AddItemMenu";
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import ItemsList from "./ItemsList";
import axios from "../../../../lib/axios";
import {ClassroomContext} from "../../../pages/classroom/[id]";

const AddItemContainer = ({handleModalClose}) => {
    const [classroom, setClassroom] = useContext(ClassroomContext)
    const {id} = classroom

    const [items, setItems] = useState([])

    const handleClick = async () => {
        if (items) {
            const Items = [...items]
            for (const item of Items){
                const {data} = await axios.post('./api/create/item', {
                    classroomID: id,
                    item: item
                })
                item.id = data
                item.donationID = null
                delete item.key
            }

            const newItems = [...classroom.Items, ...Items]
            const newClassroom = {...classroom}
            newClassroom.Items = newItems
            setClassroom(newClassroom)
        }
        handleModalClose()
    }

    return (
        <Container
            maxWidth="xs"
        >
            <Paper>
                <Box p={5}>
                    <Grid
                        container
                        direction='column'
                        spacing={3}
                    >
                        <Grid item>
                            <Typography
                                variant='h5'
                            >
                                Add an Item
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box pb={5}>
                                <Grid
                                    container
                                    direction='column'
                                    alignItems='center'
                                >
                                    <Grid item>
                                        <ItemsList items={items} setItems={setItems} />
                                    </Grid>
                                    <Grid item>
                                        <AddItemMenu items={items} setItems={setItems} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Button
                                fullWidth
                                variant='contained'
                                onClick={handleClick}
                            >
                                Add items to the wishlist
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default AddItemContainer;
