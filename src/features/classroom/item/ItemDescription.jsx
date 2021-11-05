import {Typography} from "@mui/material";
import {memo} from "react";


const ItemDescription = memo(({description}) => {
    return (
        <Typography
            color='textPrimary'
            variant='body2'
            style={{
                maxWidth: '36ch',
                wordWrap: 'break-word',
                hyphens: 'auto'
            }}
        >

            {description}
        </Typography>
    )
})

export default ItemDescription;
