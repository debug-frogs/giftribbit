import React from 'react';
import {Box, Container} from "@mui/material";
import {useSelector} from "react-redux";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import MaterialUiLoadingIcon from "../loading/MaterialUiLoadingIcon";
import {selectIsLoading} from "../loading/loadingSlice";
import {selectIsAuthPage} from "../auth/authSlice";

const Layout = (props) => {
    const isLoading = useSelector(selectIsLoading)
    const isAuthPage = useSelector(selectIsAuthPage)

    if (isAuthPage) {
        return isLoading ? <MaterialUiLoadingIcon/> : props.children
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
                        {isLoading ? <MaterialUiLoadingIcon/> : props.children}
                    </Box>
                    <Footer/>
                </Box>
            </Container>
        )
    }
}

export default Layout
