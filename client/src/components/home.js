import React from "react"
import { useNavigate } from "react-router-dom"
import MockData from "./Mockdata.json"
import './home.css'
const HomePage=()=>{
    const navigate=useNavigate()
    return(
        <>
        <div className="book-container">
        <h1>Book List</h1>
        <div className="btn" onClick={()=>navigate("/newbook")}><i class="fa fa-plus"></i> Add New Book</div>
        <div className="btn" onClick={()=>navigate("/")}><i class="fa fa-sign-out"></i> LogOut</div>
        <div className="books">
        {MockData.map(book=>{
            return(
                <div className="book">
                <img className="image" src={book.image} alt="book" onClick={()=>navigate("/book-info")}/>
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
                <h6>{book.genre}</h6>

                </div>
            )            
        })}
        </div>
        </div>
        </>
    )
}
export default HomePage