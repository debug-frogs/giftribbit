import {Box, Container, Paper} from "@mui/material";
import ItemSelect from "../donation/ItemSelect";

const DonateContainer = () => {
    return (
        <Container maxWidth='xs'>
            <Paper>
                <Box
                    p={5}
                    minWidth='300px'
                >
                    <ItemSelect />
                </Box>
            </Paper>
        </Container>
    )
}

export default DonateContainer
