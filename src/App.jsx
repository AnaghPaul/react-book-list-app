import { Component } from "react";
import "./App.css";

class BookEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-entry">
        <p>{this.props.name}</p>
        <p>{this.props.author}</p>
        <p>{this.props.year}</p>
      </div>
    );
  }
}

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          year: 1866,
        },
        {
          name: "ABCD",
          author: "xyz",
          year: 9232,
        },
      ],
    };
  }

  render() {
    return (
      <div className="book-list">
        {this.state.books.map((book) => {
          return (
            <BookEntry name={book.name} author={book.author} year={book.year} />
          );
        })}
      </div>
    );
  }
}

const App = () => {
  // return (
  //   <div className="main-container">
  //     <BookEntry
  //       name={"Crime and Punishment"}
  //       author={"Fyodor Dostoevsky"}
  //       year={1866}
  //     />
  //   </div>
  // );

  return (
    <div className="main-container">
      <BookList />
    </div>
  );
};

export default App;
