import {Button, Container, Grid, Hidden, Icon, Typography} from "@mui/material";
import {GiFrogPrince} from 'react-icons/gi'
import theme from "../../theme";
import {FaChalkboardTeacher} from 'react-icons/fa'

const Home = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={4}
            alignItems='center'
        >
            <Grid item>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    <Grid item>
                        <GiFrogPrince
                            color={theme.palette.primary.main}
                            size='8em'
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='h2'
                            color='primary'
                        >
                            GiftRibbit
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Hidden smDown>
                <Grid item>
                    <Container
                        maxWidth='md'
                    >
                        <Typography
                            align='center'
                            variant='body1'
                        >
                            GiftRibbit provides elementary school teachers an interface to request classroom supplies and donations for student success! Are you a teacher who is in need of additional classroom supplies?
                            Sign up today!
                        </Typography>
                    </Container>
                </Grid>
            </Hidden>
            <Grid item>
                <Button
                    variant='contained'
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems='center'
                    >
                        <Grid item>
                            <Icon>
                                <FaChalkboardTeacher />
                            </Icon>
                        </Grid>
                        <Grid item>
                            Sign up as a teacher
                        </Grid>
                    </Grid>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Home
