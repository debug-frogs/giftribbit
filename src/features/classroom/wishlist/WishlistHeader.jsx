import {Grid, Typography} from "@mui/material";
import WishlistMenu from "./WishlistMenu"
import {memo} from "react";

const WishlistHeader = memo(() => {
    return (
        <Grid
            container
            justifyContent='space-between'
            alignItems='center'
        >
            <Grid item>
                <Typography variant='h5'>
                    Wishlist&nbsp;🛍️
                </Typography>
            </Grid>
            <Grid item>
                <WishlistMenu />
            </Grid>
        </Grid>
    )
})

export default WishlistHeader;
