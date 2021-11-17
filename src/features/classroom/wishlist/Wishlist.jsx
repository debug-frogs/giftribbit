import {createContext, useState} from 'react';
import WishlistHeader from "./WishlistHeader";
import WishlistItemList from "./WishlistItemList";

export const WishlistContext = createContext({});


const Wishlist = () => {
    const [editable, setEditable] = useState(false)
    const [removable, setRemovable] = useState(false)

    return (
        <WishlistContext.Provider value={{
            editable: [editable, setEditable],
            removable: [removable, setRemovable]
        }}>
            <WishlistHeader />
            <WishlistItemList />
        </WishlistContext.Provider>
    );
};

export default Wishlist;
