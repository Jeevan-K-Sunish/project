import React, { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import all_product from "../Assets/all_product";
import remove_icon from "../Assets/cart_cross_icon.png"
import './CartItems.css'

export default function CartItems() {
  const { data, cartItems, setCartItems } = useContext(ShopContext);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const incrementQuantity = (itemId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.new_price, 0);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <br />
        <p>Quantity</p>
        <br />
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {cartItems.map((prod) => (
          <div className="cartitems-format cartitems-format-main" key={prod.id}>
            <img className="carticon-product-icon" src={prod.image} alt={prod.name} />
            <p>{prod.name}</p>
            <p>${prod.new_price}</p>
              <button className="cartitems-quantity-decrement" onClick={() => decrementQuantity(prod.id)}>-</button>
              <button className="cartitems-quantity">{prod.quantity}</button>
              <button className="cartitems-quantity-increment" onClick={() => incrementQuantity(prod.id)}>+</button>
            <p>${prod.new_price * prod.quantity}</p>
            <img className="cartitems-remove-icon" src={remove_icon} alt="Remove" onClick={() => removeFromCart(prod.id)} />
          </div>
        ))}
        <hr />
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
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
          <button>Proceed to Check-out</button>
        </div>
      </div>
    </div>
  );
}
