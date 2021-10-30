import Link from "../../../../lib/Link";
import {Box, Typography} from "@mui/material";


const Summary = ({disabled, summary}) => {
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

export default Summary;
