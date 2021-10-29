import {Fragment, useState} from 'react'
import {
    Box,
    Collapse,
    Divider,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    Typography
} from "@mui/material";
import {FaGift, FaBackspace, FaRegEdit} from 'react-icons/fa'
import EditItem from "./wishlist/EditItem";
import RemoveItem from "./wishlist/RemoveItem";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import Link from "../../../lib/Link";

const Item = ({item={}, editable=false, removable=false, disabled=false}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                                color='secondary'
                                onClick={handleModalOpen}
                            >
                                <FaRegEdit/>
                            </IconButton>
                        }
                        {removable &&
                            <IconButton
                                edge="end"
                                size='small'
                                color='secondary'
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
                    <Typography
                        color={disabled ? 'textSecondary' : 'textPrimary'}
                        variant='body1'
                    >
                        {item.summary}
                    </Typography>
                }
                secondary={
                    item.url &&
                        <Link
                            noLinkStyle
                            href={item.url}
                            style={{textDecoration: "none"}}
                        >
                            <Typography
                                color={disabled ? 'textSecondary' : 'secondary'}
                                variant='caption'
                            >
                                {item.url}
                            </Typography>
                        </Link>
                }
            />
            {open && item.description &&
                <IconButton
                    color='secondary'
                    onClick={handleClose}
                >
                    <ExpandLess />
                </IconButton>
            }
            {!open && item.description &&
                <IconButton
                    color='secondary'
                    onClick={handleOpen}
                >
                    <ExpandMore/>
                </IconButton>
            }
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem sx={{ pl: 6 }}>
                        <ListItemText primary={
                            <Typography
                                variant='body2'
                            >
                                {item.description}
                            </Typography>
                        } />
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
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
