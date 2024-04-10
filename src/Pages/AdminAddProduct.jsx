import React, { useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
// import './Addproduct.css';

function AddProduct() {
  const { data,products, setProducts } = useContext(ShopContext);
  console.log("data",data);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    image: '',
    new_price:'',
    old_price:''
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if ( !newProduct.name || !newProduct.category || !newProduct.image || !newProduct.new_price || !newProduct.old_price) {
      alert('Please fill in all the fields');
      return;
    }

    // Generate a unique ID for the new product
    const newProductId = Date.now();

    // Create the new product object
    const newProductData = {
      id: newProductId,
      name: newProduct.name,
      category: newProduct.category,
      image: newProduct.image,
      newprice: newProduct.new_price,
      oldprice: newProduct.old_price
    };

    // Add the new product to the products list
    setProducts([...products, newProductData]);

    // Clear the form fields
    setNewProduct({
      name: '',
      category: '',
      image: '',
      new_price: '',
      old_price: '',
    });

    alert('Product added successfully');
  };

  return (
    <div className="add-product-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
        </label>

        <label>
          Category:
          <input type="text" name="category" value={newProduct.category} onChange={handleChange} required />
        </label>

        <label>
          Image:
          <input type="text" name="image" value={newProduct.image} onChange={handleChange} required />
        </label>

        <label>
          New Price:
          <input type="number" name="newprice" value={newProduct.new_price} onChange={handleChange} required />
        </label>

        <label>
          Old Price:
          <input type="number" name="oldprice" value={newProduct.old_price} onChange={handleChange} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;