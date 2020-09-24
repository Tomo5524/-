import React from "react";
import "font-awesome/css/font-awesome.min.css";

function DisplayBook(props) {
  console.log(props, "props in display book ///////////////");
  return (
    <div className="m-2 p-5 bg-secondary">
      <div className="d-flex  justify-content-between w-100">
        <h2>Title: {props.book.title}</h2>
        <button
          onClick={() => {
            props.changeHandle(props.book.id);
          }}
          className="fas fa-trash-alt btn fa-lg"
        ></button>
      </div>
      <p>Author: {props.book.author}</p>
      <p>Pages: {props.book.pages}</p>
      <p>Read: {props.book.read}</p>
    </div>
  );
}

export default DisplayBook;
