import React, { useState } from 'react';
import Book from './components/Book';
import data from './models/books.json';

function App () {
  const [books] = useState(data);
  return <ul>
    <h1>Book Library</h1>
{books.map((book) => <Book key={book.id} book={book}/>)}
     
</ul>
}

export default App;


