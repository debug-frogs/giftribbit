import {createContext, useState} from 'react';
import WishlistHeader from "./WishlistHeader";
import WishlistItems from "./WishlistItems";

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
            <WishlistItems />
        </WishlistContext.Provider>
    );
};

export default Wishlist;
