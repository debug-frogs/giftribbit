import React, {useContext, useState} from 'react';
import {Box, Button, Container, Grid, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {FaUserPlus} from "react-icons/fa";
import {ProfileContext} from "../../../pages/profile";
import axios from "../../../../lib/axios";


const AddParent = () => {
    const [profile, setProfile] = useContext(ProfileContext)
    const {classroomID, id, Parents} = profile

    const [parentID, setParentID] = useState('')

    /* modal controls */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("/api/update/parent/teacherid", {
            classroomID: classroomID,
            parentID: parentID,
            teacherID: id,
        })
        .then( (res) => {
            const {data} = res
            const newProfile = {...profile}
            const newParents = Parents
            newParents.push(data)
            newProfile.Parents = newParents
            setProfile(newProfile)
        })
        .catch(error => {
            console.log(error)
        })

        handleClose()
    }

    return (
        <Grid
            container
            alignItems='center'
            spacing={3}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Parents
                </Typography>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item>
                        <IconButton
                            color='secondary'
                            size='small'
                            onClick={handleOpen}
                        >
                            <FaUserPlus />
                        </IconButton>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Container
                                maxWidth='xs'
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Paper>
                                    <Box p={3}>
                                        <form onSubmit={handleSubmit}>
                                            <Grid
                                                container
                                                direction='column'
                                                spacing={3}
                                            >
                                                <Grid item>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label={'Enter a parents ID'}
                                                        value={parentID}
                                                        onChange={
                                                            (event) => {
                                                                setParentID(event.target.value)
                                                            }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant='contained'
                                                        type='submit'
                                                    >
                                                        Add parent
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Box>
                                </Paper>
                            </Container>
                        </Modal>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddParent;
