import React, {useEffect} from "react"
import LogIn from '../features/login/LogIn'
import {Box, Container, Paper} from "@mui/material";
import {Auth, Logger} from "aws-amplify";
import {useDispatch} from "react-redux";
import theme from "../theme";

const login = (props) => {
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
                        <LogIn />
                    </Box>
                </Paper>
            </Container>
            <Container
                maxWidth='xs'
                sx={{ display: { sm: 'none', xs: 'block' } }}
            >
                <LogIn />
            </Container>
        </React.Fragment>
    )
};

export default login;

export async function getServerSideProps(context) {
    const logger = new Logger('login')
    try {
        const user = await Auth.currentAuthenticatedUser();
        return {
            props: {
                isAuthorized: !!user,
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
