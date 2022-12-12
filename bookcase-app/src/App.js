import React, { useState } from "react";

import { Book } from "./components/Book";
import { Search } from "./components/Search";
import data from "./models/books.json";

function addBook(id) {
  console.log(`The Book ${id} was clicked`);
}

function App() {
  // const books = data
  const [books, setBooks] = React.useState(data);
  const [keyword, setKeyword] = useState("");

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

      {books.map((item) => (
        <Book
        book={item}
          key={item.id}
          title={item.volumeInfo.title}
          subtitle={item.volumeInfo.subtitle}
          author={item.volumeInfo.authors[0]}
          selfLink={item.selfLink}
          retailPrice={item.saleInfo.retailPrice}
        />
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
        <link></link>The Only Book Library You'll Need
      </h1>
      <div classname="booklist-container">{props.children}</div>
    </div>
  );
}

export default App;
