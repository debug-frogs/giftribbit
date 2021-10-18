import {Box, Button, Grid, Typography} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import {RiParentLine} from "react-icons/ri"

const ParentSignupButton = () => {
    return (
        <Button
            variant='contained'
            color='primary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/signup-parent',}}
        >
            <Box px={3}>
                <Grid
                    container
                    justifyContent='center'
                    spacing={1}
                    wrap='nowrap'
                >
                    <Grid item>
                        <RiParentLine
                            style={{marginTop: "4px"}}
                            fontSize='large'
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant='button'>
                            Parent&nbsp;Signup
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Button>
    )
};

export default ParentSignupButton;
