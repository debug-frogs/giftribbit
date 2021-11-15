import {Fragment, useContext, useState} from 'react';
import {ProfileContext} from "../../../pages/profile";
import {Box, IconButton, List, ListItem, ListItemText, Modal, Typography} from "@mui/material";
import {FaBackspace} from "react-icons/fa";
import {TeacherParentsContext} from "./TeacherParents";
import TeacherRemoveParent from "./TeacherRemoveParent";


const TeacherParentList = () => {
    const [profile] = useContext(ProfileContext)
    const {Parents} = profile
    const [removeParent, setRemoveParent] = useState({})
    
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
                <Typography
                    variant='body2'
                >
                    Invite Parents to your Classroom..&nbsp;
                </Typography>
            </Box>
        )
    }
    else {
        return (
            <List>
                {Parents.map( (parent) =>
                    <Fragment key={parent.id}>
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
                                    onClick={ () => {
                                        setRemoveParent(parent)
                                        handleModalOpen()
                                    }}
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
                                <TeacherRemoveParent
                                    parent={removeParent}
                                    handleModalClose={handleModalClose}
                                />
                            </Box>
                        </Modal>
                    </Fragment>
                )}
            </List>
        )
    }
}

export default TeacherParentList;
