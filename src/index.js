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

class App extends React.Component {
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
      this.setState({ read: "read" });
    } else if (e.target.value == "not-read") {
      this.setState({ read: "not read" });
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
  }

  render() {
    return (
      <div className="container">
        <Nav
          value={this.state}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <Card value={this.state} changeHandle={this.deleteHandle} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
