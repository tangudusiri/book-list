import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"
const Login=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
        email:"",
        password:""
    })
   const loginUser=()=>{
    // const {email,password}=user
    // if(email && password){
    //     axios.post("http://localhost:4500/",user)
    //     .then(res=>alert(res.data.message))
    // }
    navigate("/home")

   }

    return(
        <div className="main">
        {console.log(user)}
        <div className="container">
        <h1>Member Login</h1>
        <form>
        <input type="text" placeholder="Enter email" value={user.email} onChange={(e)=>setUser(e.target.value)}/>
        <input type="password" placeholder="Enter Password" value={user.password}  onChange={(e)=>setUser(e.target.value)}/>
        <div className="login" onClick={loginUser}>Login</div>
        <div className="or">or</div>
        <div className="register" onClick={()=>navigate("/register")}>Register</div>

        <p>Forget password?</p>
        </form>
        </div>
        </div>
    )
}
export default Login