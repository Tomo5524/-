import React from "react";
// import ReactDOM from "react-dom";
import "../style.css"; // navigate back to style.css
import Form from "./form";

class Nav extends React.Component {
  // handleClick() {
  //   console.log("hiya");
  // }

  render() {
    return (
      <div className="nav justify-content-between align-items-center">
        <h1>Welcome to your own Library</h1>
        <Form />
        {/* <button onClick={this.handleClick}>click me!</button> */}
      </div>
    );
  }
}

export default Nav;
