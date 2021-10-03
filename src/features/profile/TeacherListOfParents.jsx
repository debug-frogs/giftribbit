import React, {useContext, useEffect, useState} from 'react';
import {ProfileContext} from "../../pages/profile";
import {Box, Button, Container, Grid, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {FaUserPlus} from "react-icons/fa";
import {DataStore} from "aws-amplify";
import {Parent, Teacher} from "../../models";
import hash from 'object-hash'

const TeacherListOfParents = () => {
    const {sub} = useContext(ProfileContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [parentEmail, setParentEmail] = useState('')
    const [parents, setParents] = useState([])

    useEffect(async () => {
        /* get the parents details from Data */
        const teacher = (await DataStore.query(Teacher)).find(c => c.sub === sub)
        const parentList = (await DataStore.query(Parent)).filter(c => c.teacherID === teacher.id)
        setParents(parentList)
    }, []);


    const handleClick = async () => {
        /* Update a parent teacher relationship */
        const teacher = (await DataStore.query(Teacher)).find(c => c.sub === sub)
        const parent = (await DataStore.query(Parent)).find(c => c.email === parentEmail)

        try {
            if (!parent.teacherID) {
                await DataStore.save(
                    Parent.copyOf(parent, updated => {
                        updated.teacherID = teacher.id
                    }))
            }
            else{
                throw new Error('Cannot add parent because parent teacher relationship already exists')
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            handleClose()
        }
    }

    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
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
                                                <Grid
                                                    container
                                                    direction='column'
                                                    spacing={3}
                                                >
                                                    <Grid item>
                                                        <TextField
                                                            fullWidth
                                                            label={'Enter a parents email'}
                                                            value={parentEmail}
                                                            onChange={
                                                                (event) => {
                                                                    setParentEmail(event.target.value)
                                                                }}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant='contained'
                                                            onClick={handleClick}
                                                        >
                                                            Add parent
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Paper>
                                    </Container>
                                </Modal>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction='column'
                >
                    {parents?.map( (parent) =>
                        <Grid
                            item
                            key={hash(parent)}
                        >
                            <Typography>
                                {parent.first_name}&nbsp;{parent.last_name}
                            </Typography>
                            <Typography>
                                parent of {parent.child}
                            </Typography>
                            <Typography>
                                {parent.email}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>

    )
};

export default TeacherListOfParents;
