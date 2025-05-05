import { Component } from "react";
import "./App.css";

class BookEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="book-entry">
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.year}</td>
      </tr>
    );
  }
}

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book Collection</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map((book, index) => {
              return (
                <BookEntry
                  key={index}
                  title={book.title}
                  author={book.author}
                  year={book.year}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedOption: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <select name="filter" id="" onChange={this.handleChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
      </select>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { filterString: "", filterField: null };
  }

  render() {
    return (
      <div className="search-bar">
        <Input
          placeholder="Search for books..."
          onChange={this.props.handleInputChange}
        />
        <Dropdown onChange={this.props.handleFilterChange} />
      </div>
    );
  }
}

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          year: 1866,
        },
        {
          title: "ABCD",
          author: "xyz",
          year: 9232,
        },
      ],
      filterString: "",
      filterField: "title",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  filterBooks() {
    return this.state.books.filter((book) =>
      book[this.state.filterField]
        .toLowerCase()
        .includes(this.state.filterString.toLowerCase())
    );
  }

  handleInputChange(input) {
    this.setState((prev) => {
      return { ...prev, filterString: input };
    });
  }

  handleFilterChange(option) {
    this.setState((prev) => {
      return { ...prev, filterField: option };
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleFilterChange={this.handleFilterChange}
        />
        <BookList books={this.filterBooks()} />
      </div>
    );
  }
}

const App = () => {
  return <Library />;
};

export default App;
