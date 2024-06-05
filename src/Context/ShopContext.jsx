import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
// import CartItems from "../Components/CartItem/CartItems";


export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.length + 1; index++) {
//         cart[index] = 0;

//     }

//     return cart;

// }


const ShopContextProvider = (props) => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [login, setLogin] = useState([]);
    const [user, setUser] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState(all_product)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([]);


    // const addToCart = (itemId) => {
    //     if (isLoggedIn) {
    //         if (cartItems[itemId] > 0) {
    //             alert('Product has already been added');
    //         } else {
    //             setCartItems([CartItems, itemId]);
    //         }
    //     } else {
    //         alert('Please Login to Add Products to the Cart');
    //     }
    // }

    

    const loginHandler = () => {
        setIsLoggedIn(true);
    };

    

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_product.find((product) => product.id === Number(item))
    //             totalAmount += cartItems[item] * itemInfo.new_price;
    //         }
    //     }
    //     return totalAmount;
    // }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, all_product, cartItems,setCartItems, name, setName, email, setEmail, password, setPassword, login, setLogin, user, setUser, isLoggedIn, loginHandler, data, setData, products, setProducts };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider