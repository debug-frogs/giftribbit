import {Fragment, useContext, useState} from 'react'
import {Box, Collapse, Divider, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal} from "@mui/material";
import {FaGift, FaBackspace, FaRegEdit} from 'react-icons/fa'
import WishlistEditItem from "./WishlistEditItem";
import WishlistRemoveItem from "./WishlistRemoveItem";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ItemUrl from "../item/ItemUrl";
import ItemSummary from "../item/ItemSummary";
import ItemDescription from "../item/ItemDescription";
import {WishlistContext} from "./Wishlist";


const WishlistItem = ({item={}}) => {
    const wishlistContext = useContext(WishlistContext)
    const [editable, setEditable] = wishlistContext.editable
    const [removable, setRemovable] = wishlistContext.removable

    const disabled = !!item.donationID

    const [open, setOpen] = useState(false);

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
                        {editable && !removable &&
                            <IconButton
                                id={`wishlist-edit-button-${item.summary.replace(/\s/g, '-')}`}
                                edge="end"
                                size='small'
                                color='secondary'
                                onClick={handleModalOpen}
                            >
                                <FaRegEdit/>
                            </IconButton>
                        }
                        {!editable && removable &&
                            <IconButton
                                id={`wishlist-remove-button-${item.summary.replace(/\s/g, '-')}`}
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
                disableTypography
                primary={
                    <ItemSummary disabled={disabled} summary={item.summary} />
                }
                secondary={
                    <ItemUrl disabled={disabled} href={item.url} />
                }
            />
            {open && !disabled && !!item.description &&
                <IconButton
                    id={`wishlist-exandless-button`}
                    color='secondary'
                    onClick={handleClose}
                >
                    <ExpandLess />
                </IconButton>
            }
            {!open && !disabled && !!item.description &&
                <IconButton
                    id={`wishlist-exandmore-button`}
                    color='secondary'
                    onClick={handleOpen}
                >
                    <ExpandMore/>
                </IconButton>
            }
            </ListItem>
            <Collapse
                in={open && !disabled && !!item.description}
                timeout="auto"
                unmountOnExit
            >
                <Box maxWidth={300}>
                    <List disablePadding>
                        <ListItem
                            sx={{ pl: 6, pb: 5 }}
                        >
                            <ListItemText
                                disableTypography
                                primary={
                                    <ItemDescription description={item.description} />
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
                <Divider />
            </Collapse>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                style={{overflow: 'scroll',}}
            >
                <Box style={modalContentStyle}>
                    {editable && <WishlistEditItem item={item} handleModalClose={handleModalClose}/>}
                    {removable && <WishlistRemoveItem item={item} handleModalClose={handleModalClose}/>}
                </Box>
            </Modal>
        </Fragment>
    )
}

export default WishlistItem;
