import {Grid, Typography} from "@mui/material";
import ItemMenuButton from "./ItemMenuButton"

const WishlistHeader = () => {
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
                <ItemMenuButton />
            </Grid>
        </Grid>

    );
};

export default WishlistHeader;
