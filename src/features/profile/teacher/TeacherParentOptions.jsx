import {Fragment, useContext, useState} from 'react';
import {Box, Container, Grid, IconButton, Modal, Paper, Typography} from "@mui/material";
import {FaUserPlus, FaUserMinus, FaTimes} from "react-icons/fa";
import TeacherAddParent from "./TeacherAddParent";
import {ProfileContext} from "../../../pages/profile";
import {TeacherParentsContext} from "./TeacherParents";


const TeacherParentOptions = () => {
    const {Parents} = useContext(ProfileContext)
    const [removable, setRemovable] = useContext(TeacherParentsContext).removable
    const handleClickRemove = () => {
        removable ? setRemovable(false) : setRemovable(true)
    }

    const [modelOpen, setModelOpen] = useState(false);
    const handleModelOpen = () => {
        setModelOpen(true)
    }
    const handleModelClose = () => {
        setModelOpen(false)
    };

    return (
        <Fragment>
            <Grid
                container
                alignItems='center'
                justifyContent='space-between'
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
                                disabled={removable}
                                color='secondary'
                                size='small'
                                onClick={handleModelOpen}
                            >
                                <FaUserPlus />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                disabled={!!Parents?.length}
                                color='secondary'
                                size='small'
                                onClick={handleClickRemove}
                            >
                                {removable ? <FaTimes/> : <FaUserMinus/>}
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Modal
                open={modelOpen}
                onClose={handleModelClose}
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
                            <TeacherAddParent handleClose={handleModelClose}/>
                        </Box>
                    </Paper>
                </Container>
            </Modal>
        </Fragment>
    );
};

export default TeacherParentOptions;
