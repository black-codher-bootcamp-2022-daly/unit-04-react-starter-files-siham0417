import React, { useState } from 'react';
import Book from './components/Book';
import data from './models/books.json';

function App () {
  const [books] = useState(data);
  return <ul>
    <h1 style= {{
      fontFamily: "cursive"
    }}>The Only Book Library You'll Need</h1>
{books.map((book) => <Book key={book.id} book={book}/>)}
     
</ul>
}

export default App;


