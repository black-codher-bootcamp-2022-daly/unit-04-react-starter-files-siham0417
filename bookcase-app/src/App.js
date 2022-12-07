import React, { useState } from "react";
import { Book, PimpedBook } from "./components/Book";
import { Search } from "./components/Search";
import data from "./models/books.json";

function addBook(id) {
  console.log(`The Book ${id} was clicked`);
}

function App() {
  // const books = data
  const [books, setBooks] = React.useState(data);
  const [keyword, setKeyword] = useState("");

  const favoBook = books[4];

  async function findBooks(value) {
    console.log("find books got clicked", value);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    <Booklist books={books} addBook={addBook}>
      <Search keyword={keyword} setKeyword={setKeyword} findBooks={findBooks} />
      <PimpedBook>
        <h2>{favoBook.volumeInfo.title}</h2>
        <p>{favoBook.volumeInfo.description}</p>
      </PimpedBook>

      <Book
        handleClick={addBook}
        id={favoBook.id}
        title={favoBook.volumeInfo.title}
        book={favoBook}
      />

      {books.map((item) => (
        <PimpedBook>
          <h2>{item.volumeInfo.title}</h2>
          <p>{item.volumeInfo.description}</p>
        </PimpedBook>
      ))}
    </Booklist>
  );
}

function Booklist(props) {
  return (
    <div>
      <h1
        style={{
          fontFamily: "cursive",
        }}
      >
        The Only Book Library You'll Need
      </h1>
      <div classname="booklist-container">{props.children}</div>
    </div>
  );
}

export default App;
