import {Fragment, memo} from 'react'
import {Box, Divider, GlobalStyles, Grid, Paper} from "@mui/material";
import ClassroomHeader from "./ClassroomHeader";
import ClassroomHeroImage from "./ClassroomHeroImage";
import ClassroomSubheader from "./ClassroomSubheader";
import DonationList from "./donation/DonationList";
import ContributeButton from "./contribute/ContributeButton";
import DonationsHeader from "./donation/DonationsHeader";
import Wishlist from "./wishlist/Wishlist";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const ClassroomLayout = memo(() => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Fragment>
            {/*desktop view*/}
            {isSm && <GlobalStyles styles={{body: {backgroundColor: "#efe5fd"}}}/>}
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
                                        <ClassroomHeader />
                                    </Grid>
                                    <Grid item>
                                        <ClassroomHeroImage />
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                                            <Grid
                                                container
                                                direction='column'
                                                spacing={5}
                                            >
                                                <Grid item>
                                                    <ClassroomSubheader/>
                                                </Grid>
                                                <Grid item>
                                                    <Wishlist />
                                                </Grid>
                                                <Grid item>
                                                    <Divider />
                                                </Grid>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        justifyContent='center'
                                                    >
                                                        <Grid item>
                                                            <ContributeButton/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Divider />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <DonationsHeader />
                                    </Grid>
                                    <Grid item>
                                        <DonationList />
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
                                            <ClassroomSubheader/>
                                        </Grid>
                                        <Grid item>
                                            <Wishlist />
                                        </Grid>
                                        <Grid item>
                                            <Grid
                                                container
                                                justifyContent='center'
                                            >
                                                <Grid item>
                                                    <ContributeButton/>
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
                                <ClassroomHeader/>
                            </Grid>
                            <Grid item>
                                <ClassroomHeroImage />
                            </Grid>
                            <Grid item>
                                <ClassroomSubheader/>
                            </Grid>
                            <Grid item>
                                <Wishlist />
                            </Grid>
                            <Grid item>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    justifyContent='center'
                                >
                                    <Grid item>
                                        <ContributeButton/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <DonationsHeader />
                            </Grid>
                            <Grid item>
                                <DonationList />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
})

export default ClassroomLayout;
