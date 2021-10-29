import {Fragment, useState} from 'react'
import {Box, Icon, IconButton, ListItem, ListItemIcon, ListItemText, Modal, Typography} from "@mui/material";
import {FaGift, FaBackspace, FaRegEdit} from 'react-icons/fa'
import EditItem from "./wishlist/EditItem";
import RemoveItem from "./wishlist/RemoveItem";
import Link from "../../../lib/Link";

const Item = ({item={}, editable=false, removable=false, disabled=false}) => {
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
                    <Icon
                        fontSize='small'
                        color={disabled ? 'disabled' : 'primary'}
                    >
                        <FaGift/>
                    </Icon>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Link
                            noLinkStyle
                            href={item.url}
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                color={disabled ? 'textSecondary' : 'secondary'}
                                variant='body1'
                            >
                                {item?.summary}
                            </Typography>
                        </Link>
                    }
                    secondary={
                        <Typography
                            color={disabled ? 'textSecondary' : 'textPrimary'}
                            variant='caption'
                        >
                            {item?.summary}
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
