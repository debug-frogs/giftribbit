import {Fragment, useState} from 'react'
import {Box, Button, Modal} from "@mui/material";
import DonateContainer from "./DonateContainer";

const DonateButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <Fragment>
            <Button
                variant='contained'
                size='large'
                color='primary'
                onClick={handleOpen}
            >
                Contribute a donation
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                style={{overflow: 'scroll',}}
            >
                <Box
                    style={modalContentStyle}
                >
                    <DonateContainer/>
                </Box>
            </Modal>
        </Fragment>
    );
};

export default DonateButton;
