import {Box, CircularProgress} from "@mui/material";

const LoadingIcon = () => {
    return (
        <Box
            position='fixed'
            top='40%'
            left='50%'
        >
            <Box
                width='32px'
                ml='-18px'
            >
                <CircularProgress
                    color="primary"
                />
            </Box>
        </Box>
    );
};

export default LoadingIcon;
