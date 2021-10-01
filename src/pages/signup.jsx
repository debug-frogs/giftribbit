import React, {useEffect} from "react";
import {Box, Container, Hidden, Paper} from "@mui/material";
import SignUp from "../features/signup/SignUp";
import {Auth, Logger} from "aws-amplify";
import {useDispatch} from "react-redux";
import Profile from "../features/profile/Profile";
import theme from "../theme";

const signup = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'auth/setIsAuthorized', payload: props.isAuthorized})
    },[])

    return (
        <React.Fragment>
            <Container
                sx={{ display: { sm: 'block', xs: 'none' } }}
                maxWidth='xs'
            >
                <Paper
                    variant='outlined'
                    sx={{ borderColor: theme.palette.secondary.main}}
                >
                    <Box p={3}>
                        <SignUp />
                    </Box>
                </Paper>
            </Container>
            <Container
                maxWidth='xs'
                sx={{ display: { sm: 'none', xs: 'block' } }}
            >
                <SignUp />
            </Container>
        </React.Fragment>
    )
};

export default signup

export async function getServerSideProps(context) {
    const logger = new Logger('signup')
    try {
        const user = await Auth.currentAuthenticatedUser();

        return {
            props: {
                auth: {
                    isAuthorized: !!user,
                }
            }
        }
    }
    catch (error) {
        console.log(error)
        logger.error(error)
        return {
            props: {},
        }
    }
    finally {}
}
