import Link from "../../../../lib/Link";
import {Box, Typography} from "@mui/material";
import {memo} from "react";

const isValidUrl = (href) => {
    try {
        const url = new URL(href);
        return url.protocol === "http:" || url.protocol === "https:"
    } catch (error) {
        return false;
    }
}

const ItemUrl = memo(({disabled, href}) => {

    if (disabled || !isValidUrl(href)) {
        return (
            <Box
                style={{
                    maxWidth: '20ch',
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}
            >
                <Typography
                    color='textSecondary'
                    variant='caption'
                    component='span'
                >

                    {href}
                </Typography>
            </Box>
        )
    }
    else {
        return (
            <Link
                noLinkStyle
                href={href}
                style={{textDecoration: "none"}}
            >
                <Box
                    style={{
                        maxWidth: '20ch',
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}
                >
                    <Typography
                        color='secondary'
                        variant='caption'
                        noWrap
                    >
                        {href}
                    </Typography>
                </Box>
            </Link>
        )
    }
})

export default ItemUrl;
