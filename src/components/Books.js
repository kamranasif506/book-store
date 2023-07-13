import React, { useState } from 'react';
import BookList from './BookList';

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ]);

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="container  mt-5">
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;
