const express=require("express")
const mongoose=require("mongoose")
// const User=require("./model")
const app=express()
app.use(express.json())
app.use(express.urlencoded())
//mongoose connection
mongoose.connect("mongodb://localhost:27017/mybooks",
{useNewParser:true,useUnifiedTopology:true},()=>{
    console.log("DB Connected Successfully")
})

const userShema=new mongoose.Schema({
    email:String,
    password:String
})
const User= mongoose.model("User",userShema)

//routes
app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/",(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"Login Successfully"})
        }
    })
})

app.post("/register",(req,res)=>{
    const {email,password,reenterPassword}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
          res.send({message:"User Already Exist"})
        }else{
            const user=new User({
                email,
                password,
                reenterPassword
              })
              user.save(err=>{
                  if(err){
                      console.log(err)
                  }else{
                      res.send({message:"User Registeered Successfully"})
                  }
              })
        }
    })
    
})

//port listening
app.listen(4500,()=>{
    console.log("port running at 4500")
})