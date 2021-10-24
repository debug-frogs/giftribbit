import {Fragment} from 'react'
import {FaEdit} from 'react-icons/fa';
import {Box, IconButton, Menu, MenuItem, Modal} from "@mui/material";
import {useState} from "react";
import AddItemMenu from "./AddItemMenu"
import AddItemContainer from "./AddItemContainer";

const ItemMenuButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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

    return (
        <Fragment>
            <IconButton
                id="item-menu-button"
                aria-controls="item-positioned-menu"
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                onClick={handleMenuClick}
            >
                <FaEdit />
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
                    Add Item
                </MenuItem>
                <MenuItem
                    onClick={handleMenuClose}
                >
                    Edit Item
                </MenuItem>
                <MenuItem
                    onClick={handleMenuClose}
                >
                    Remove Item
                </MenuItem>
            </Menu>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                style={{overflow: 'scroll',}}
            >
                <Box style={modalContentStyle}>
                    <AddItemContainer handleModalClose={handleModalClose}/>
                </Box>
            </Modal>
        </Fragment>
    );
};

export default ItemMenuButton;
