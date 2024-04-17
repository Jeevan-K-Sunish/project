import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
    const {getTotalCartAmount,data,cartItems,removeFromCart} = useContext(ShopContext)
    const [ newItem ,setCartItems ] = useState(cartItems);


    useEffect(() => {
        setCartItems(cartItems);
    }, [data, setCartItems, cartItems])

    // const removeFromcart=(id)=>{
    //     cartItems.filter(item=>item.id!==id)
    // }

    const incrementQuantity = (itemId) => {
        const updatedCart = { ...newItem }; // Create a copy of the cartItems state
        updatedCart[itemId] += 1; // Increment the quantity of the specified item
        setCartItems(updatedCart); // Update the state with the modified copy
    };
    
    const decrementQuantity = (itemId) => {
        if (newItem[itemId] >= 1) {
            const updatedCart = { ...newItem }; // Create a copy of the cartItems state
            updatedCart[itemId] -= 1; // Decrement the quantity of the specified item
            setCartItems(updatedCart); // Update the state with the modified copy
        }
    }; 
     

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <br />
            <p>Quantity</p>
            <br />
            <p>Total</p>
            <p>remove</p>
        </div>
        <hr />
        {data.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity-decrement" onClick={() => decrementQuantity(e.id)}>-</button>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <button className="cartitems-quantity-increment" onClick={() => incrementQuantity(e.id)}>+</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Order Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                </div>  
                <button>PROCEED TO CHECKOUT</button>
            </div>       
        </div>
    </div>
  )
}


export default CartItems


