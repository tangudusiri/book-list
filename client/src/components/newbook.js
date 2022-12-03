import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./newbook.css"
const AddNewBook=()=>{
    const navigate=useNavigate()
    const [book,setBook]=useState({
        title:"",
        isbn:"",
        author:"",
        description:"",
        publish_date:"",
        publisher:""
    })
    const handleChange=(e)=>{
       const {name,value}=e.target
       setBook({
        ...book,[name]:value
       })
    }

    return(
        <div className="main">
        <div className="new-book-container">
        <div className="show-list">Show Bookist</div>
        <h1>Add Book</h1>
        <h4>Create new book</h4>
        <form className="form-field">
        <input type="text" placeholder="Title of the book" name="title" value={book.title} onChange={handleChange} />
        <input type="text" placeholder="ISBN"  name="isbn" value={book.isbn} onChange={handleChange} />
        <input type="text" placeholder="Author"  name="author" value={book.author} onChange={handleChange}/>
        <input type="text" placeholder="Describe of this book"  name="description" value={book.description} onChange={handleChange}/>
        <input type="text" placeholder="Published_date"  name="publish_date" value={book.publish_date} onChange={handleChange} />
        <input type="text" placeholder="Publisher of the book"  name="publisher" value={book.publisher} onChange={handleChange} />
        <div className="submit-btn" onClick={()=>navigate("/home")}>Submit</div>


        </form>
        </div>
        </div>
    )
}
export default AddNewBook