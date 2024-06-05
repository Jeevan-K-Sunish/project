import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';

export const ProductDisplay = (props) => {
    const { data, cartItems, setCartItems } = useContext(ShopContext);
    const { isLoggedIn } = useContext(ShopContext);
    const { productId } = useParams();
    const product = data.find(item => item.id == productId);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        if (isLoggedIn) {
            const existingProduct = cartItems.find(item => item.id === product.id);
            if (existingProduct) {
                alert('Product has already been added');
            } else {
                setCartItems([...cartItems, { ...product, quantity }]);
            }
        } else {
            alert('Please Login to Add Products to the Cart');
        }
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="productdisplay">
            <div className='productdisplay-left'>
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className="quantity-controls">
                    {/* <button onClick={decrementQuantity}>-</button> */}
                    <button>{quantity}</button>
                    {/* <button onClick={incrementQuantity}>+</button> */}
                </div>
                <button onClick={addToCart}>Add to Cart</button>
                <p className='productdisplay-right-category'><span>Category :</span>Women, T-shirt, Crop top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;
