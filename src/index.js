// Structure Tree
// root
//   app
//     nav
//       form
//         each component
//     books
//       book
//         each component

// The component that owns a piece of state should be the one modifying it.

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Nav from "./components/nav";
import Card from "./components/card";
// import setLocalStorage from "./components/localstorage";

class App extends React.Component {
  // change this class to function
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      pages: "",
      read: "",
      lib: [],
      required: false,
    };
    // without this, error message is ConstantSourceNode
    // TypeError: this.setState is not a function
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.resetCurrentState = this.resetCurrentState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // how to handle change, watch Youtube

  // warningHandle(warning_state) {
  //   this.setState({ required: !warning_state });
  // }

  handleChange(e) {
    console.log("jsut chenaged", e.target);
    if (e.target.name == "title") {
      this.setState({ title: e.target.value });
    } else if (e.target.name == "author") {
      this.setState({ author: e.target.value });
    } else if (e.target.name == "pages") {
      this.setState({ pages: e.target.value });
    } else if (e.target.value == "read") {
      this.setState({ read: "Read" });
    } else if (e.target.value == "not-read") {
      this.setState({ read: "Not Read" });
    }
  }

  handleClick(e) {
    if (e && e.target.innerHTML == "Submit") {
      // check if input is valid
      if (
        this.state.title !== "" &&
        this.state.author !== "" &&
        this.state.pages !== "" &&
        this.state.read !== ""
      ) {
        const new_title = this.state.title;
        const new_author = this.state.author;
        const new_pages = this.state.pages;
        const new_read = this.state.read;
        const new_book = {
          title: new_title,
          author: new_author,
          pages: new_pages,
          read: new_read,
          id: new Date().getTime(),
        };

        const updated_library = this.state.lib.slice();
        updated_library.push(new_book);
        console.log(updated_library, "updated_library");
        this.setState({
          lib: updated_library,
        });
        // <Card value={this.state.lib}/>
        this.setState({ required: false });
        console.log("valid /////////////");
        //// reset current state so empty input does not go through validation
        /// EDGE CASE
        this.resetCurrentState();
        // add a new book to localstorage
        localStorage.setItem(
          JSON.stringify(new_book.id),
          JSON.stringify(new_book)
        );
      } else {
        this.setState({ required: true });
        console.log("invalid /////////////////");
      }
      console.log(this, "this shown");
    }
  }

  deleteHandle(given_id) {
    const new_books = this.state.lib.filter((book) => book.id !== given_id);
    this.setState({ lib: new_books });
    localStorage.removeItem(JSON.stringify(given_id));
  }

  handleToggle(cur_book) {
    console.log(cur_book, "cur_book /////");
    let changed_state = cur_book.read == "Read" ? "Not Read" : "Read";
    console.log(changed_state, "changed_state /////");
    // also update libraby
    // https://stackoverflow.com/questions/49627157/update-the-attribute-value-of-an-object-using-the-map-function-in-es6
    // how to edit one spefic object out of array
    const editBooks = this.state.lib.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.id === cur_book.id) {
        temp.read = changed_state;
        console.log(temp, "temp//////");
      }
      return temp;
    });

    console.log(editBooks, "editBooks /////");
    this.setState({ lib: editBooks });
    console.log(this.state.lib, "this.state.lib /////");

    //   this.state.lib.forEach(function (book) {
    //     if(book.id === cur_book.id){
    //       this.setState({ read: changed_state });
    //     }
    // });

    //   console.log(this.state.read, "this.state.read /////");
    //   console.log(this.state.lib, "this.state.lib /////");
  }

  resetCurrentState() {
    this.setState({
      title: "",
      author: "",
      pages: "",
      read: "",
      required: false,
    });
    console.log(this.state, "this.state after reset /////");
    // state still remains in above line but state has been changed
  }

  // how to excute this only once right afer the program executed
  // setLocalStorage.renderEachBookFromLocalStorage()
  // Google best practice for react localstorage
  // setLocalstorage() {
  //   let new_books = [];
  //   Object.keys(localStorage).forEach(function (id) {
  //     // id is key
  //     console.log(id, "id in localstorage render each book");
  //     let desirialize_id = JSON.parse(id);
  //     let book = localStorage.getItem(desirialize_id);
  //     console.log(JSON.parse(book), "book render in index.js");
  //     new_books.push(JSON.parse(book));
  //   });
  //   return new_books;
  // };
  // if (localStorage.length > 0) {
  //   console.log(this.state.lib, "this.state.lib after updated in new lib");
  //   let new_books = {()=> savedLibrary};
  //   this.setState({ lib: new_books });
  // }

  render() {
    return (
      <div className="container">
        <Nav
          value={this.state}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <Card
          value={this.state}
          changeHandle={this.deleteHandle}
          changeToggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
