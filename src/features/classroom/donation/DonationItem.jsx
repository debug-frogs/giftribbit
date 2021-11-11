import {Fragment, useContext, useState} from 'react'
import {Box, Icon, IconButton, ListItem, ListItemIcon, ListItemText, Modal} from "@mui/material";
import {FaGift, FaBackspace} from 'react-icons/fa'
import ItemUrl from "../item/ItemUrl";
import ItemSummary from "../item/ItemSummary";
import {DonationContext} from "./Donation";
import DonationRemoveItem from "./DonationRemoveItem"


const Item = ({item={}}) => {
    const [removable] = useContext(DonationContext).removable

    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        if (removable) {
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
                        {removable &&
                            <IconButton
                                id={`donation-remove-button-${item.summary.replace(/\s/g, '-')}`}
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
                    color={'primary'}
                >
                    <FaGift/>
                </Icon>
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={
                    <ItemSummary summary={item.summary} />
                }
                secondary={
                    <ItemUrl href={item.url} />
                }
            />
            </ListItem>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                style={{overflow: 'scroll',}}
            >
                <Box style={modalContentStyle}>
                    {removable && <DonationRemoveItem item={item} handleModalClose={handleModalClose}/>}
                </Box>
            </Modal>
        </Fragment>
    )
}

export default Item;
