import React, {useContext, useState} from 'react';
import {Box, Button, Container, Grid, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {FaUserPlus} from "react-icons/fa";
import {ProfileContext} from "../../../pages/profile";
import {DataStore} from "aws-amplify";
import {Parent} from "../../../models";


const updateParentTeacherID = async (teacherID, parentEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [parent] = await DataStore.query(Parent, c => c.email("eq", parentEmail))

            if (!parent){
                return reject(new Error("parent not found"))
            }

            if (parent.teacherID){
                return reject(new Error("teacherID already exists"))
            }

            /* update Parent teacherID */
            await DataStore.save(
                Parent.copyOf(parent, updated => {
                    updated.teacherID = teacherID;
                })
            )

            return resolve({
                child: parent.child,
                email: parent.email,
                first_name: parent.first_name,
                id: parent.id,
                last_name: parent.last_name,
                sub: parent.sub,
            })
        }
        catch (error){
            reject(error)
        }
    })
}


const AddParent = () => {
    const [profile, setProfile] = useContext(ProfileContext)
    const {id, Parents} = profile

    const [parentEmail, setParentEmail] = useState('')

    /* modal controls */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        updateParentTeacherID(id, parentEmail)
            .then( (newParent) => {
                const newProfile = {...profile}
                const newParents = Parents
                newParents.push(newParent)
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
