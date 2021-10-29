import {Fragment, useState} from 'react'
import {Box, IconButton, ListItem, ListItemIcon, ListItemText, Modal, Typography} from "@mui/material";
import {FaGift, FaBackspace, FaRegEdit} from 'react-icons/fa'
import EditItem from "./wishlist/EditItem";
import RemoveItem from "./wishlist/RemoveItem";

const Item = ({item = {}, editable = false, removable = false}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        if ((!editable && removable) || (editable && !removable)) {
            setModalOpen(true)
        }
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <Fragment>
            <ListItem
                secondaryAction={
                    <Fragment>
                        {editable &&
                            <IconButton
                                edge="end"
                                size='small'
                                onClick={handleModalOpen}
                            >
                                <FaRegEdit/>
                            </IconButton>
                        }
                        {removable &&
                            <IconButton
                                edge="end"
                                size='small'
                                onClick={handleModalOpen}
                            >
                                <FaBackspace/>
                            </IconButton>
                        }
                    </Fragment>
                }
            >
                <ListItemIcon
                    style={{minWidth: '32px'}}
                >
                    <FaGift/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            variant='body2'
                        >
                            {item?.summary}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            variant='caption'
                        >
                            {item?.url}
                        </Typography>
                    }
                />
            </ListItem>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                style={{overflow: 'scroll',}}
            >
                <Box style={modalContentStyle}>
                    {editable && <EditItem item={item} handleModalClose={handleModalClose}/>}
                    {removable && <RemoveItem item={item} handleModalClose={handleModalClose}/>}
                </Box>
            </Modal>
        </Fragment>
    )
}

export default Item;
