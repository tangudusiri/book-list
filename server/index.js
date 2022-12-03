const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
//mongoose connection
mongoose.connect("mongodb://localhost:27017/userAuthentication",
{useNewParser:true},()=>{
    console.log("DB Connected Successfully")
})

const userShema=new mongoose.Schema({
    email:String,
    password:String
})
const User=new mongoose.model("User",userShema)

const bookSchema=new mongoose.Schema({
    title:String,
    isbn:String,
    author:String,
    description:String,
    publish_date:String,
    publisher:String
})

const Book=new mongoose.model("Book",bookSchema)

//routes
app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
           if(password===user.password){
            res.send({message:"Login Successfully",user:user})
           }else{
            res.send({message:"Password didn't match"})
           }
        }else{
            res.send({message:"User not registered"})
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
                     res.send(err)
                  }else{
                      res.send({message:"User Registered Successfully"})
                  }
              })
        }
    })
    
})

app.post("/add",(req,res)=>{
    const{title,isbn,author,description,publish_date,publisher}=req.body
    const book=new Book({
       title,isbn,author,description,publish_date,publisher
    })
    book.save(err=>{
        if(err){
           res.send(err)
        }else{
            res.send({message:"New Book Added Successfully",book:book})
        }
    })
})

//port listening
app.listen(4500,()=>{
    console.log("port running at 4500")
})