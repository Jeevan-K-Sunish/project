import React, { useContext, useState } from 'react'
import './CSS/Loginsignup.css'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'



export const Loginsignup = () => {
  const {user,setUser} = useContext(ShopContext)
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  const nav = useNavigate()

  const isUserAlreadyRegistered = () =>{
    return user.find((data) => data.email === email);
  };

  const handleButtonClick = () => {
    if (isUserAlreadyRegistered()) {
      alert("This User Already Exists!!. Please use a different email.");
      return;
    }
    const userData = { name, email, password };
    setUser([...user, userData]);

    nav("/login")
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) =>  setPassword(e.target.value)} />
        </div>
        <button onClick={() => handleButtonClick()} >Continue</button>
        {/* <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing i agree to the terms and policy</p>
        </div> */}
      </div>
    </div>
  )
}

export default Loginsignup
