import {Container, Grid, Typography} from "@mui/material";
import TeacherSignupButton from "../auth/TeacherSignupButton";
import ParentSignupButton from "../auth/ParentSignupButton";
import FrogBoi from "../../assets/FrogBoi";

const Home = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
            alignItems='center'
        >
            <Grid item>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    <Grid item>
                        <FrogBoi />
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
                    maxWidth='xs'
                >
                    <Typography
                        align='center'
                        variant='body2'
                    >
                        Providing elementary school teachers an interface to request
                        classroom supplies and donations for student success!
                    </Typography>
                </Container>
            </Grid>
            <Grid item>
                <Grid
                    container
                    alignItems='center'
                    spacing={5}
                >
                    <Grid item>
                        <TeacherSignupButton />
                    </Grid>
                    <Grid item>
                        <ParentSignupButton />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home
