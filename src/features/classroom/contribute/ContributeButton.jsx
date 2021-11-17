import {Fragment, useContext, useState} from 'react'
import {Box, Button, Modal} from "@mui/material";
import ContributeItem from "./ContributeItem";
import {ClassroomContext} from "../../../pages/classroom/[id]";

const ContributeButton = () => {
    const [classroom] = useContext(ClassroomContext)
    const {Items} = classroom
    const filteredItems = Items.filter(item => !item.donationID)

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
                disabled={classroom.Teacher.id === classroom.userSub || filteredItems.length === 0}
                variant='contained'
                size='large'
                color='secondary'
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
                    <ContributeItem handleClose={handleClose}/>
                </Box>
            </Modal>
        </Fragment>
    )
}

export default ContributeButton;
