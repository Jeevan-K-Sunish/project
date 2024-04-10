import React from "react";
import { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import "./CSS/AdminEdit.css"

export default function EditProducts() {
  const { data, setData } = useContext(ShopContext);
  const {productId}=useParams()
const product=data.find(user=>user.id==productId)
console.log("edit",product,productId);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedNew_Price, setEditedNew_Price] = useState("");
  const [editedOld_Price, setEditedOld_Price] = useState("")

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedName(data[index].name);
    setEditedCategory(data[index].category);
    setEditedNew_Price(data[index].new_price);
    setEditedOld_Price(data[index].old_price);
  };
  

  const handleSaveClick = (index) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], name: editedName, category: editedCategory, new_price: editedNew_Price, old_price: editedOld_Price };
    setData(updatedData);
    setEditIndex(null);
  };

  return (
    <div className="admin-edit">
      {data.map((data, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div className="admin-edit-label">
              <label>
                Name:
                <input
                  type="text"
                  value={editedName||data.name}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                />
              </label>
              <label>
                New Price:
                <input 
                type="number"
                value={editedNew_Price}
                onChange={(e) => setEditedNew_Price(e.target.value)}
                />
              </label>
              <label>
                Old Price:
                <input
                type="number"
                value={editedOld_Price}
                onChange={(e) => setEditedOld_Price(e.target.value)}
                />
              </label>
              <button onClick={() => handleSaveClick(index)}>Save</button>
              <hr />
            </div>
            
          ) : (
            <div className="admin-edit-view">
              <img src={data.img} alt="img" />
              <h1>Name:{data.name}</h1>
              <h3>Category: {data.category}</h3>
              <h3>Old Price: {data.old_price}</h3>
              <h3>New Price: {data.new_price}</h3>
              <button onClick={() => handleEditClick(index)}>Edit Product</button>
            </div>
          )
        }
        </div>
      ))}
    </div>
  );
}