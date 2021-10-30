import {useContext, useState} from 'react'
import {Box, Button, Checkbox, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import hash from "object-hash";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import axios from "../../../../lib/axios";


const ContributeItem = ({handleClose}) => {
    const [classroom, setClassroom] = useContext(ClassroomContext).classroom
    const [profile] = useContext(ClassroomContext).profile

    const {Items} = classroom
    const filteredItems = Items.filter(item => !item.donationID)

    const [checkedItems, setCheckedItems] = useState([])
    const [disabled, setDisabled] = useState(false)

    const handleDonate = async () => {
        setDisabled(true)

        const parentID = profile.id
        const donationID = classroom.Donations.find(donation => donation.Parent.id === parentID).id
        const checkedIDs = checkedItems.map(c => c.id)
        const updatedItems = []
        for (const item of checkedItems) {
            const {data} = await axios.patch('./api/update/item', {
                            donationID: donationID,
                            id: item.id,
                            summary: item.summary,
                            url: item.url,
                            _version: item._version
                        })
            updatedItems.push(data)
        }

        const newClassroom = {...classroom}
        newClassroom.Items.forEach(c => {
            if (checkedIDs.includes(c.id)){
                c.donationID = donationID
            }
        })
        const donation = newClassroom.Donations.find(c => c.id === donationID)
        donation.items = [...donation.items, ...updatedItems]

        setClassroom(newClassroom)
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
                        spacing={3}
                    >
                        <Grid item>
                            <Typography style={{ fontWeight: 600 }}>
                                Donate Items
                            </Typography>
                        </Grid>
                        <Grid item>
                            <List dense>
                                {filteredItems?.map((item) =>
                                    <ListItem
                                        key={hash({...item})}
                                        disablePadding
                                        divider
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                onClick={(event) => {
                                                    const newCheckedItems = [...checkedItems].filter(c => c.id !== item.id)
                                                    if (event.target.checked) {
                                                        newCheckedItems.push(item)
                                                        setCheckedItems(newCheckedItems)
                                                    }
                                                    else {
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
                                color='secondary'
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
