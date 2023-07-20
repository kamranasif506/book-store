import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books }) => (

  <div className="row">
    <div className="col-12">
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}

        />
      ))}
    </div>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
