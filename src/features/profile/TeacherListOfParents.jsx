import React, {useContext, useEffect, useState} from 'react';
import {ProfileContext} from "../../pages/profile";
import {Box, Button, Container, Grid, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {FaUserPlus} from "react-icons/fa";
import {DataStore} from "aws-amplify";
import {Parent, Teacher} from "../../models";

const TeacherListOfParents = () => {
    const {sub} = useContext(ProfileContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [parentSub, setParentSub] = useState('')
    const [parents, setParents] = useState([])

    useEffect(async () => {
        const [currentTeacher] = await DataStore.query(Teacher, c => c.sub === sub)
        const p = await DataStore.query(Parent, c => c.teacherID === currentTeacher.id)
        setParents(p)
    }, []);


    const handleClick = async () => {
        /* Create a new parent data content */
        const [parent] = await DataStore.query(Parent, c => c.sub === parentSub)
        const [currentTeacher] = await DataStore.query(Teacher, c => c.sub === sub)

        await DataStore.save(
            Parent.copyOf(parent, updated => {
                updated.teacherID = currentTeacher.id
            }))
            .catch(error => {console.log(error)})
            .then(res => {console.log(res)})
            .finally(() => {handleClose()})
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
                                        <Grid
                                            container
                                            direction='column'
                                            spacing={3}
                                        >
                                            <Grid item>
                                                <TextField
                                                    fullWidth
                                                    label={'Enter the parent Sub Id'}
                                                    value={parentSub}
                                                    onChange={
                                                        (event) => {
                                                            setParentSub(event.target.value)
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
            <Grid item>
                <Grid container>
                    {parents.map( (p, i) => {
                        console.log(p)
                        return(
                            <Grid
                                item
                                key={i}
                            >
                                <Grid container>
                                    <Grid item>
                                        <Typography>
                                            {p.id}
                                        </Typography>
                                        <Typography>
                                            Name: {p.first_name}&nbsp;{p.last_name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default TeacherListOfParents;
