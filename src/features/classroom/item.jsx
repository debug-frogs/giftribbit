import {ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {FaGift} from 'react-icons/fa'
import Link from "../../../lib/Link";

const Item = ({item}) => {
    return (
        <ListItem>
            <ListItemIcon
                style={{minWidth: '32px'}}
            >
                <FaGift/>
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography
                        variant='body2'
                    >
                        {item?.summary}
                    </Typography>
                }
                secondary={
                    <Typography
                        variant='caption'
                    >
                        {item?.url}
                    </Typography>
                }
            />
        </ListItem>
    )
}

export default Item;
