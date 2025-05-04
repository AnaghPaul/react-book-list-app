import { Component } from "react";
import "./App.css";

class BookEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-entry">
        <p>{this.props.bookTitle}</p>
        <p>{this.props.author}</p>
        <p>{this.props.year}</p>
      </div>
    );
  }
}

const App = () => {
  return (
    <>
      <BookEntry
        bookTitle={"Crime and Punishment"}
        author={"Fyodor Dostoevsky"}
        year={1866}
      />
    </>
  );
};

export default App;
