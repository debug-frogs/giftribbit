import {Container, Grid, Typography} from "@mui/material";
import {GiFrogPrince} from 'react-icons/gi'
import theme from "../../theme";
import TeacherSignUpButton from "../auth/ButtonSignUpTeacher";

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
            <Grid
                item
                sx={{ display: { sm: 'block', xs: 'none' } }}
            >
                <Container
                    maxWidth='sm'
                >
                    <Typography
                        align='center'
                        variant='body2'
                    >
                        GiftRibbit provides elementary school teachers an interface to request
                        classroom supplies and donations for student success! Are you a teacher
                        who is in need of additional classroom supplies? Sign up today!
                    </Typography>
                </Container>
            </Grid>
            <Grid item>
                <TeacherSignUpButton />
            </Grid>
        </Grid>
    )
}

export default Home
