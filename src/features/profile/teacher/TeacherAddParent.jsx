import {useContext, useState} from 'react';
import {Box, Button, Container, Grid, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {FaUserPlus} from "react-icons/fa";
import {ProfileContext} from "../../../pages/profile";
import {API} from "aws-amplify";
import axios from "../../../../lib/axios";


const TeacherAddParent = () => {
    const [profile, setProfile] = useContext(ProfileContext)
    const {classroomID, id, Parents} = profile

    const [parentEmail, setParentEmail] = useState('')

    const [disabled, setDisabled] = useState(false)

    /* modal controls */
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setDisabled(false)
    }
    const handleClose = () => setOpen(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)

        await API.post('fetchusersubapi', '/fetchusersub', {body: {email: parentEmail}})
            .then( async parentID =>
                !!Parents.find(c => c.id === parentID) ? null :
                await axios.post("/api/update/parent/teacherid", {
                    classroomID: classroomID,
                    parentID: parentID,
                    teacherID: id
                })
            )
            .then( res => {
                const {data} = res
                const newProfile = {...profile}
                const newParents = Parents
                newParents.push(data)
                newProfile.Parents = newParents
                setProfile(newProfile)
            })
            .catch(error => {})
            .finally(() => handleClose())
    }

    return (
        <Grid
            container
            alignItems='center'
            spacing={5}
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
                                    <Box p={5}>
                                        <form onSubmit={handleSubmit}>
                                            <Grid
                                                container
                                                direction='column'
                                                spacing={4}
                                            >
                                                <Grid item>
                                                    <Typography
                                                        style={{ fontWeight: 600 }}
                                                        display='inline'
                                                    >
                                                        Invite parent to classroom
                                                    </Typography>
                                                </Grid>
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
                                                        disabled={disabled}
                                                        fullWidth
                                                        variant='outlined'
                                                        color='secondary'
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

export default TeacherAddParent;
