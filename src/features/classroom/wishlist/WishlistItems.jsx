import {List} from "@mui/material";
import Item from "../Item";
import {useContext} from "react";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import hash from "object-hash";
import {WishlistContext} from "./Wishlist";

const WishlistItems = () => {
    const [classroom] = useContext(ClassroomContext).classroom
    const {Items} = classroom
    const sortedItems = Items?.sort((a, b) => a.summary.localeCompare(b.summary))

    const wishlistContext = useContext(WishlistContext)
    const [editable, setEditable] = wishlistContext.editable
    const [removable, setRemovable] = wishlistContext.removable


    return (
        <List dense>
            {sortedItems?.map((item) =>
                <Item
                    item={item}
                    editable={editable}
                    removable={removable}
                    disabled={!!item.donationID}
                    dropdown={true}
                    key={hash({...item})}
                />
            )}
        </List>
    );
};

export default WishlistItems;
