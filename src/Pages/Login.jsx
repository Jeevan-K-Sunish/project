import React, { useContext, useState } from 'react'
import './CSS/Login.css'
import { ShopContext } from '../Context/ShopContext'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    const {user,setUser,login,setLogin,loginHandler} = useContext(ShopContext);



    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const nav = useNavigate();

    function adminBtn() {
        nav("/adminlogin")
    }

    function loginButton() {
        const loggedUser=user.find(
            (userData) => userData.email === email && userData.password===password
        )
        if(loggedUser){
            setUser(loggedUser)
            alert("login successful !!");
            loginHandler();
            nav("/shop");
        }else {
            alert("invalid email or password");
        }
    }
  return (
    <div className='login'>
        <div className="login-container">
        <h1>Login</h1>
        <div className='login-fields'>
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={loginButton}>Login</button>

        <button onClick={adminBtn}> Admin Login</button>

        </div>
    </div>
  )
}

export default Login