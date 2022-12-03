import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./register.css"
const Register=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
      email:"",
      password:"",
      reenterPassword:""
    })
     
    const registerUser=()=>{
      const {email,password,reenterPassword}=user
      if(email && password && (password===reenterPassword)){
        axios.post("http://localhost:4500/register",user)
        .then(res=>alert(res.data.message))
      }else{
        alert("invalid inputs")
      }
    }


    return(
        <div className="main1">
        {console.log(user)}
        <div className="container">
        <h1>Member Register</h1>
        <form>
        <input type="text" placeholder="Enter email" value={user.email} onChange={(e)=>setUser(e.target.value)}/>
        <input type="password" placeholder="Enter Password" value={user.password}  onChange={(e)=>setUser(e.target.value)}/>
        <input type="password" placeholder="Reenter Password" value={user.reenterPassword}  onChange={(e)=>setUser(e.target.value)}/>
        <div className="register" onClick={registerUser}>Register</div>
        <p onClick={()=>navigate("/")}>Member Login</p>
        </form>
        </div>
        </div>
    )
}
export default Register