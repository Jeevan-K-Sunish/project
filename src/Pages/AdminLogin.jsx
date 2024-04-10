import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/AdminLogin.css'

export const AdminLogin = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const nav = useNavigate();

    function adminButton() {

        if(email==="admin@gmail.com" && password==="admin"){
            alert("admin login successful")
            nav("/adminproduct")
        }else{
            alert("Invalid Admin Credentials")
        }
    }
  return (
    <div className='admin-login'>
        <div className="admin-login-container">
            <h1>Admin Login</h1>
            <div className="admin-login-fields">
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={adminButton}>Admin Login</button>
        </div>

    </div>
  )
}

export default AdminLogin
