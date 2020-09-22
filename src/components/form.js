import React from "react";
// import ReactDOM from "react-dom";
import "../style.css"; // navigate back to style.css
// import ModalApp from "./modal";
import AppModal from "./modal";

// learn about form!!!

class Form extends React.Component {
  // state must be maintained here! read the state quote u will know what this means
  // The component that owns a piece of state should be the one modifying it

  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      pages: "",
      read: 0,
    };
    // without this, error message is ConstantSourceNode
    // TypeError: this.setState is not a function
    this.handleChange = this.handleChange.bind(this);
  }

  // how to handle change, watch Youtube

  handleChange(e) {
    if (e.target.name == "title") {
      this.setState({ title: e.target.value });
    } else if (e.target.name == "author") {
      this.setState({ author: e.target.value });
    } else if (e.target.name == "pages") {
      this.setState({ pages: e.target.value });
    }

    console.log("jsut chenaged", e.target.value);
  }

  // handleAuthorChange(e) {
  //   if (e.target.value) {
  //     console.log("jsut chenaged", e.target.value);
  //     this.setState({ title: e.target.value });
  //   }
  // }

  // handlePageChange(e) {
  //   if (e.target.value) {
  //     console.log("jsut chenaged", e.target.value);
  //     this.setState({ title: e.target.value });
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    console.log("meow handleclick");
    // if (book.title){
    //   this.setState({
    //   title: book.title,
    //   author: book.author,
    //   pages: book.pages,
    //   read: book.read,
    // })
    // }
  }

  render() {
    return (
      <div>
        {/* <h1>React Modal</h1> */}
        {/* <ModalApp show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </ModalApp> */}
        <AppModal value={this.state} onClick={this.handleChange} />
        {/* <button type="button" onClick={this.showModal}>
          open
        </button> */}
      </div>
    );
  }
}

export default Form;

// function Form() {
//   // const clickHandle = () => {
//   //   console.log("hiya");
//   //   return <ModalApp />;
//   // };

//   return (
//     <div>
//       <button onClick={() => this.setState({ showModal: true })}>
//         Add Work Log
//       </button>
//       {/* <button onClick={clickHandle}>Add a new book</button> */}
//     </div>
//   );
// }

// export default Form;

// function Form() {
//   const clickHandle = () => {
//     return (
//       <div className="container book-form w-100">
//         <div className="d-flex justify-content-center">
//           <div className="user_card">
//             {/* <!-- create remove button  --> */}
//             <div className="remove-icon-box text-right">
//               <button className="remove-btn close-icon">
//                 <i className="fa fa-times align-top" aria-hidden="true"></i>
//               </button>
//             </div>
//             <div className="d-flex justify-content-center">
//               <div className="brand_logo_container">
//                 <div className="d-flex justify-content-center logo-wrapper">
//                   <i
//                     className="fa fa-book logo-book fa-5x"
//                     aria-hidden="true"
//                   ></i>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center form_container">
//               <form>
//                 <div className="input-group mb-3">
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <i className="fa fa-book" aria-hidden="true"></i>
//                     </span>
//                   </div>
//                   <input
//                     type="text"
//                     name="bookname"
//                     className="form-control input_user"
//                     id="bookname"
//                     placeholder="bookname"
//                     required
//                   />
//                 </div>
//                 <div className="input-group mb-3">
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <i className="fas fa-user"></i>
//                     </span>
//                   </div>
//                   <input
//                     type="text"
//                     name="authorname"
//                     className="form-control input_user"
//                     id="authorname"
//                     placeholder="authorname"
//                     required
//                   />
//                 </div>
//                 <div className="input-group mb-3">
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <i className="fa fa-bookmark" aria-hidden="true"></i>
//                     </span>
//                   </div>
//                   <input
//                     type="number"
//                     name="pages"
//                     className="form-control input_pass"
//                     id="pages"
//                     placeholder="pages"
//                     required
//                   />
//                 </div>
//                 <div className="read-check mb-3">
//                   <input type="radio" id="read" name="read" value="read" />
//                   <label for="read">Read</label>
//                   <input
//                     type="radio"
//                     id="not-read"
//                     name="read"
//                     value="not-read"
//                     checked
//                   />
//                   <label for="not-read">Not Read yet</label>
//                 </div>
//                 <div className="d-flex justify-content-center mt-3 login_container">
//                   <button type="submit" name="submit" className="btn login_btn">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <button onClick={clickHandle}>Add a new book</button>
//     </div>
//   );
// }

// export default Form;
