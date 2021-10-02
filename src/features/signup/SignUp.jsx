import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import axios from "../../../lib/axios";
import Router from "next/router";
import {NextLinkComposed} from "../../../lib/Link";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(
            '/api/auth/signup',
            {
                email: email,
                password: password
            })
            .then(async (res) => await Router.push('/login'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                direction='column'
                spacing={3}
            >
                <Grid item>
                    <Typography style={{ fontWeight: 600 }}>
                        Sign Up
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
                            <Typography
                                variant='caption'
                                color='secondary'
                                component={NextLinkComposed}
                                to={{pathname: '/login',}}
                                style={{textDecoration: 'none'}}
                            >
                                log-in to account
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='outlined'
                                type='submit'
                            >
                                <Box px={3}>
                                    Create&nbsp;Account
                                </Box>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
};

export default SignUp;
