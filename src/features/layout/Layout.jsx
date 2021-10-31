import {Box, Container} from "@mui/material";
import {useSelector} from "react-redux";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import LoadingIcon from "../loading/LoadingIcon";
import {selectIsAuthPage} from "../auth/authSlice";

const Layout = (props) => {
    const isLoading = props.isLoading
    const isAuthPage = useSelector(selectIsAuthPage)

    if (isAuthPage) {
        return isLoading ? <LoadingIcon/> : props.children
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
                        {isLoading ? <LoadingIcon/> : props.children}
                    </Box>
                    <Footer/>
                </Box>
            </Container>
        )
    }
}

export default Layout
