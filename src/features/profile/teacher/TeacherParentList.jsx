import {Fragment, useContext, useState} from 'react';
import {ProfileContext} from "../../../pages/profile";
import {Box, Grid, Icon, IconButton, List, ListItem, ListItemText, Modal, Typography} from "@mui/material";
import hash from 'object-hash'
import {FaBackspace} from "react-icons/fa";
import {TeacherParentsContext} from "./TeacherParents";
import TeacherRemoveParent from "./TeacherRemoveParent";
import {GiFrog} from 'react-icons/gi'


const TeacherParentList = () => {
    const [profile] = useContext(ProfileContext)
    const {Parents} = profile

    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        setModalOpen(true)
    }
    const handleModalClose = () => {
        setModalOpen(false)
    };

    const [removable] = useContext(TeacherParentsContext).removable

    const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    if (!Parents.length) {
        return (
            <Box py={3}>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid item>
                        <Typography
                            variant='body2'
                            display='inline'
                        >
                            Invite Parents to your Classroom..&nbsp;
                        </Typography>
                        <Icon
                            fontSize='small'
                            color='primary'
                        >
                            <GiFrog />
                        </Icon>
                    </Grid>
                </Grid>
            </Box>
        )
    }
    else {
        return (
            <List>
                {Parents.map( (parent, i) =>
                    <Fragment key={hash(parent)+`${i}`}>
                        <ListItem dense>
                            <ListItemText
                                primary={
                                    `${parent.first_name} ${parent.last_name}`
                                }
                                secondary={
                                    `parent of ${parent.child}`
                                }
                            />
                            {removable &&
                            <IconButton
                                edge="end"
                                color='secondary'
                                onClick={handleModalOpen}
                            >
                                <FaBackspace/>
                            </IconButton>
                            }
                        </ListItem>
                        <Modal
                            open={modalOpen}
                            onClose={handleModalClose}
                            style={{overflow: 'scroll',}}
                        >
                            <Box style={modalContentStyle}>
                                <TeacherRemoveParent parent={parent} handleModalClose={handleModalClose}/>
                            </Box>
                        </Modal>
                    </Fragment>
                )}
            </List>
        )
    }
};

export default TeacherParentList;
