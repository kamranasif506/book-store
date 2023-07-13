import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, onDelete }) => (
  <div className="row">
    <div className="col-12">
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
