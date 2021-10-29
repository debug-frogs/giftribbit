import {useContext, useState} from 'react'
import {Box, Button, Checkbox, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import hash from "object-hash";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import axios from "../../../../lib/axios";

const ContributeItem = ({handleClose}) => {
    const [classroom] = useContext(ClassroomContext).classroom
    const [profile] = useContext(ClassroomContext).profile

    const {Items} = classroom

    const [checkedItems, setCheckedItems] = useState([])
    const [disabled, setDisabled] = useState(false)

    const handleDonate = async () => {
        setDisabled(true)
        handleClose()
    }

    return (
        <Container maxWidth='xs'>
            <Paper>
                <Box
                    p={5}
                    minWidth='300px'
                >
                    <Grid
                        container
                        direction='column'
                        spacing={2}
                    >
                        <Grid item>
                            <Typography style={{ fontWeight: 600 }}>
                                Donate Items
                            </Typography>
                        </Grid>
                        <Grid item>
                            <List dense>
                                {Items?.map((item) =>
                                    <ListItem
                                        key={hash({...item})}
                                        disablePadding
                                        divider
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                onClick={(event) => {
                                                    if (event.target.checked) {
                                                        setCheckedItems(item.id)
                                                    }
                                                    else {
                                                        const newCheckedItems = [...checkedItems].filter(id => id !== item.id)
                                                        setCheckedItems(newCheckedItems)
                                                    }
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    variant='subtitle2'
                                                >
                                                    {item?.summary}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                )}
                            </List>
                        </Grid>
                        <Grid item>
                            <Button
                                fullWidth
                                type='submit'
                                variant='outlined'
                                onClick={handleDonate}
                                disabled={disabled}
                            >
                                Donate Items
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default ContributeItem;
