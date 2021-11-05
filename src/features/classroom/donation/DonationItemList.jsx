import hash from "object-hash";
import {List} from "@mui/material";
import DonationItem from "./DonationItem";
import {memo} from "react";

const DonationItemList = memo(({items = []}) => {
    return (
        <List dense>
            {items.map(item =>
                <DonationItem
                    key={hash(item)}
                    item={item}
                />
            )}
        </List>
    )
})

export default DonationItemList;
