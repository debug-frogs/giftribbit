import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import axios from "../../../lib/axios";
import Router from "next/router";
import {NextLinkComposed} from "../../../lib/Link";
import {Logger} from "aws-amplify";

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(
            '/api/auth/signin',
            {
                email: email,
                password: password
            })
            .then(async (res) => {
                const logger = new Logger('signup')
                logger.info(res)
                console.log(res)
                return await Router.push('/profile')
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                direction='column'
                spacing={4}
            >
                <Grid item>
                    <Typography style={{ fontWeight: 600 }}>
                        Sign in to your account
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        required
                        label="Enter your email"
                        variant="outlined"
                        onChange={ event => {
                            setEmail(event.target.value)
                        }}
                        value={email}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        required
                        label="Enter your password"
                        variant="outlined"
                        onChange={ event => {
                            setPassword(event.target.value)
                        }}
                        value={password}
                    />
                </Grid>
                <Grid item>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='space-between'

                    >
                        <Grid item>
                            <Grid
                                container
                                wrap='nowrap'
                                direction='column'
                            >
                                <Grid item>
                                    <Typography
                                        variant='caption'
                                    >
                                        Dont have an account?
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='caption'
                                        color='secondary'
                                        component={NextLinkComposed}
                                        to={{pathname: '/signup',}}
                                        style={{textDecoration: 'none'}}
                                    >
                                        Create an account
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='outlined'
                                type='submit'
                            >
                                <Box px={5}>
                                    Log&nbsp;In
                                </Box>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
};

export default LogIn;
