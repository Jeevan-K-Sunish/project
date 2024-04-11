import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;

    }

    return cart;

}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [login, setLogin] = useState([]);
    const [user, setUser] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState(all_product)
    const [products,setProducts] = useState([])

    const addToCart = (itemId) => {
        if (isLoggedIn) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        } else {
            alert('Please  Login to Add Products to the Cart');
        }
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
    };

    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems,getTotalCartAmount, all_product, cartItems, addToCart, removeFromcart, name, setName, email, setEmail, password, setPassword, login, setLogin, user, setUser, isLoggedIn, loginHandler, data, setData, products, setProducts };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider