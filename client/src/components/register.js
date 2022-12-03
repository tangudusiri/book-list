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

    const handleInput=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,[name]:value
        })
    }
     
    const registerUser=()=>{
      const {email,password,reenterPassword}=user
      if(email && password && (password===reenterPassword)){
        axios.post("http://localhost:4500/register",user)
        .then(res=>alert(res.data.message))
      }
    }


    return(
        <div className="main1">
        {console.log(user)}
        <div className="container">
        <h1>Member Register</h1>
        <form>
        <input type="text" placeholder="Enter email" value={user.email} name="email" onChange={handleInput}/>
        <input type="password" placeholder="Enter Password" value={user.password} name="password"  onChange={handleInput}/>
        <input type="password" placeholder="Reenter Password" value={user.reenterPassword} name="reenterPassword"  onChange={handleInput}/>
        <div className="register" onClick={registerUser}>Register</div>
        <p onClick={()=>navigate("/")}>Member Login</p>
        </form>
        </div>
        </div>
    )
}
export default Register