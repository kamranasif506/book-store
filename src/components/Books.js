import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';

const Books = () => {
  // console.log(useSelector((state) => state.store));
  // console.log(useSelector((state) => state.store));
  const { bookItems } = useSelector((state) => state.store);
  return (
    <div className="container  mt-5">
      <BookList books={bookItems} />
      <hr className="mt-5" />
      <BookForm />
    </div>
  );
};

export default Books;
