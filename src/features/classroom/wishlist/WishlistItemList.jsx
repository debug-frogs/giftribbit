import {List} from "@mui/material";
import {useContext} from "react";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import hash from "object-hash";
import WishlistItem from "./WishlistItem";

const WishlistItemList = () => {
    const [classroom] = useContext(ClassroomContext).classroom
    const {Items} = classroom
    const sortedItems = Items?.sort((a, b) => a.summary.localeCompare(b.summary))


    return (
        <List dense>
            {sortedItems?.map((item) =>
                <WishlistItem
                    item={item}
                    dropdown={true}
                    key={hash({...item})}
                />
            )}
        </List>
    );
};

export default WishlistItemList;
