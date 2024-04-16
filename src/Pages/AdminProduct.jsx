import React, { useContext } from "react";
import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/AdminProduct.css"



const AdminProduct = () => {
  const {data,setData ,all_product} = useContext(ShopContext);

console.log("hello")
 const navigate=useNavigate()

  const handleEdit = (productId) => {

  navigate(`/adminedit/${productId}`)
   };
   console.log("data",data,'edrtghyu',all_product);

  const handleAddProduct=()=>{
  //   setProductList(products)

    // console.log("setprodcutss", setProductList);
    navigate("/addproduct")
  }


  const handleDelete = (product) => {
   setData(data.filter((item) => item !== product))
    // setData(updatedProducts);
  };

  return (
    <div className="admin-product">
      <div>
        <div className="addproduct-button">
        <Button className="addproduct" onClick={handleAddProduct} >Add Product
          
        </Button>
        </div>
      </div>
      {data.map((product) => (
        <div className="products-container" key={product.id}>
          <hr />
          <div className="admin-edit-view">
          <h3>{product.name}</h3>
          <Image src={product.image} alt={product.name} />
          <p>Category: {product.category}</p>
          <p>Price: {product.new_price}</p>
          <p>Quantity: {product.old_price}</p>
          <Button onClick={() => handleEdit(product.id)}>Edit</Button>{" "}
          <Button onClick={() => handleDelete(product)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminProduct;