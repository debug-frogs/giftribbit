import React from 'react';
import {Box, Container, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../theme";
import {useSelector} from "react-redux";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import MaterialUiLoadingIcon from "../loading/MaterialUiLoadingIcon";
import {selectIsLoading} from "../loading/loadingSlice";

const Layout = (props) => {
    const isLoading = useSelector(selectIsLoading)

    return (
        <ThemeProvider
            theme={theme}
        >
            <CssBaseline/>
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
        </ThemeProvider>
    )
}

export default Layout
