import {ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {FaGift} from 'react-icons/fa'

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
                    <Typography>
                        {item?.summary}
                    </Typography>
                }
            />
        </ListItem>
    )
}

export default Item;
