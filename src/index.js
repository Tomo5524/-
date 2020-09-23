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
// import Card from "./components/card";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
