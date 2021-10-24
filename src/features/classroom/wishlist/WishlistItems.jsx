import {List} from "@mui/material";
import Item from "../item";
import {useContext} from "react";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import hash from "object-hash";

const WishlistItems = () => {
    const [classroom] = useContext(ClassroomContext)
    const {Items} = classroom

    return (
        <List dense>
            { Items?.map((item) =>
                <Item
                    item={item}
                    key={hash({...item})}
                />
            )}
        </List>
    );
};

export default WishlistItems;
