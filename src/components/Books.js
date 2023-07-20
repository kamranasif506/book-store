import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import '../styles/Loader.css';

const Books = () => {
  const { bookItems, isLoading } = useSelector((state) => state.store);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader1">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
  return (
    <div className="container  mt-5">
      <BookList books={bookItems} />
      <hr className="mt-5" />
      <BookForm />
    </div>
  );
};

export default Books;
