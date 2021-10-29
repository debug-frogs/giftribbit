import {Fragment, useContext} from 'react'
import {FaEdit, FaTimes} from 'react-icons/fa';
import {Box, IconButton, Menu, MenuItem, Modal, Typography} from "@mui/material";
import {useState} from "react";
import AddItem from "./AddItem"
import {WishlistContext} from "./Wishlist";
import {ClassroomContext} from "../../../pages/classroom/[id]";

const WishlistMenu = () => {
    const wishlistContext = useContext(WishlistContext)

    const [profile] = useContext(ClassroomContext).profile
    const {type} = profile

    const [classroom] = useContext(ClassroomContext).classroom
    const {Items} = classroom

    const [editable, setEditable] = wishlistContext.editable
    const [removable, setRemovable] = wishlistContext.removable

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        if (editable || removable) {
            setEditable(false)
            setRemovable(false)
        }
        else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditItem = () => {
        setEditable(true)
        setRemovable(false)
        handleMenuClose()
    }

    const handleRemoveItem = () => {
        setEditable(false)
        setRemovable(true)
        handleMenuClose()
    }

    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false)
        handleMenuClose()
    }

    const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    if (type === 'Teacher') {
        return (
            <Fragment>
                <IconButton
                    id="item-menu-button"
                    aria-controls="item-positioned-menu"
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? 'true' : undefined}
                    onClick={handleMenuClick}
                    color={editable || removable ? 'default' : 'secondary'}
                    size='small'
                >
                    {editable || removable ? <FaTimes/> : <FaEdit/>}
                </IconButton>
                <Menu
                    id="item-positioned-menu"
                    aria-labelledby="item-menu-button"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem
                        onClick={handleModalOpen}
                    >
                        <Typography
                            variant='body2'
                        >
                            Add Item
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        disabled={!Items.length}
                        onClick={Items.length ? handleEditItem : null}
                    >
                        <Typography
                            variant='body2'
                        >
                            Edit Item
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        disabled={!Items.length}
                        onClick={Items.length ? handleRemoveItem : null}
                    >
                        <Typography
                            variant='body2'
                        >
                            Remove Item
                        </Typography>
                    </MenuItem>
                </Menu>
                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                    style={{overflow: 'scroll',}}
                >
                    <Box style={modalContentStyle}>
                        <AddItem handleModalClose={handleModalClose}/>
                    </Box>
                </Modal>
            </Fragment>
        )
    }
    else {
        return null;
    }
};

export default WishlistMenu;
