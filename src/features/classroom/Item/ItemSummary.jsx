import {Typography} from "@mui/material";


const ItemSummary = ({disabled, summary}) => {
    return (
        <Typography
            color={disabled ? 'textSecondary' : 'textPrimary'}
            variant='body2'
            style={{
                maxWidth: '24ch',
                wordWrap: 'break-word',
                hyphens: 'auto'
            }}
        >

            {summary}
        </Typography>
    )
};

export default ItemSummary;
