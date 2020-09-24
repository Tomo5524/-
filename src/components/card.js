import React from "react";
import DisplayBook from "./books";

class Card extends React.Component {
  render() {
    console.log(this.props, "props in Card///");
    const books = this.props.value.lib.map((book) => (
      <DisplayBook
        changeHandle={this.props.changeHandle}
        key={book.id}
        book={book}
      />
    ));

    return <div className="d-flex">{books}</div>;
  }
}

export default Card;
