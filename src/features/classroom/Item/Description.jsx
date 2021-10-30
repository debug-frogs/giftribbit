import {Typography} from "@mui/material";


const Description = ({description}) => {
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
};

export default Description;
