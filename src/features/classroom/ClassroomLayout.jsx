import {Fragment} from 'react'
import {Box, Grid, Paper} from "@mui/material";
import Header from "./Header";
import HeroImage from "./HeroImage";
import WishlistHeader from "./wishlist/WishlistHeader";
import WishlistItems from "./wishlist/WishlistItems";
import Subheader from "./Subheader";
import DonationsContainer from "./donation/DonationsContainer";
import DonateButton from "./donate/DonateButton";
import DonationsHeader from "./donation/DonationsHeader";

const ClassroomLayout = () => {
    return (
        <Fragment>
            {/*desktop view*/}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent='center'
                    wrap='nowrap'
                >
                    <Grid item>
                        <Paper>
                            <Box
                                maxWidth={700}
                                minWidth={500}
                                p={5}
                            >
                                <Grid
                                    container
                                    direction='column'
                                    spacing={3}
                                >
                                    <Grid item>
                                        <Header />
                                    </Grid>
                                    <Grid item>
                                        <HeroImage />
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                                            <Grid
                                                container
                                                direction='column'
                                                spacing={3}
                                            >
                                                <Grid item>
                                                    <Subheader/>
                                                </Grid>
                                                <Grid item>
                                                    <WishlistHeader />
                                                    <WishlistItems />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <DonationsHeader />
                                    </Grid>
                                    <Grid item>
                                        <DonationsContainer />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: { sm: 'none', md: 'block' } }}>
                            <Paper pt={5}>
                                <Box
                                    width='40vw'
                                    maxWidth={450}
                                    px={5}
                                    pt={5}
                                    pb={10}
                                >
                                    <Grid
                                        container
                                        spacing={3}
                                        direction='column'
                                    >
                                        <Grid item>
                                            <Subheader/>
                                        </Grid>
                                        <Grid item>
                                            <WishlistHeader />
                                            <WishlistItems />
                                        </Grid>
                                        <Grid item>
                                            <Grid
                                                container
                                                justifyContent='center'
                                            >
                                                <Grid item>
                                                    <DonateButton/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/*mobile view*/}
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Grid
                    container
                    spacing={5}
                    justifyContent='center'
                    wrap='nowrap'
                >
                    <Grid item>
                        <Grid
                            container
                            direction='column'
                            spacing={3}
                        >
                            <Grid item>
                                <Header/>
                            </Grid>
                            <Grid item>
                                <HeroImage />
                            </Grid>
                            <Grid item>
                                <Subheader/>
                            </Grid>
                            <Grid item>
                                <WishlistHeader />
                                <WishlistItems />
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    justifyContent='center'
                                >
                                    <Grid item>
                                        <DonateButton/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <DonationsHeader />
                            </Grid>
                            <Grid item>
                                <DonationsContainer />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
};

export default ClassroomLayout;
