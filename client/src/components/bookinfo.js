import React from "react";
import "./bookinfo.css"
const BookInfo=()=>{
    return(
        <>
        <div className="bookinfo-container">
        <div className="bookinfo">
        <div className="show-list">Show Book List</div>
        <h1 className="title">Book's Record</h1>
        <h5 className="table-view">View book's info</h5>
        <div className="table">
        <table class=" table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">ISBN</th>
      <th scope="col">Author</th>
      <th scope="col">Description</th>
      <th scope="col">Published_date</th>
      <th scope="col">Publisher</th>

    </tr>
  </thead>
  <tbody>
   
   
  </tbody>
</table>
        <div className="btns">
        <div className="delete">Delete Book</div>
        <div className="edit">Edit Book</div>

        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default BookInfo