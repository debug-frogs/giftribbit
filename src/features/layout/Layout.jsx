import {Box, Container, GlobalStyles} from "@mui/material";
import {useSelector} from "react-redux";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import LoadingIcon from "../loading/LoadingIcon";
import {selectIsAuthPage} from "../auth/authSlice";
import {Fragment} from "react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const Layout = (props) => {
    const isLoading = props.isLoading
    const isAuthPage = useSelector(selectIsAuthPage)

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    if (isAuthPage) {
        return isLoading ?
            <LoadingIcon/>
            :
            <Fragment>
                <GlobalStyles styles={{body: {backgroundColor: "#efe5fd"}}}/>
                {props.children}
            </Fragment>

    }
    else {
        return (
            <Container
                maxWidth='lg'
                style={{padding: '0'}}
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                >
                    <Navigation/>
                    <Box
                        m={5}
                        minHeight='60vh'
                    >
                        {isLoading ?
                            <Fragment >
                                {isSm && <GlobalStyles styles={{body: {backgroundColor: "#efe5fd"}}}/>}
                                <LoadingIcon/>
                            </Fragment>
                            : props.children}
                    </Box>
                    <Footer/>
                </Box>
            </Container>
        )
    }
}

export default Layout
