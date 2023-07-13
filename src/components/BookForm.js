import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      return;
    }
    const newBook = {
      title,
      author,
    };
    onAdd(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="row p-3">
      <div className="col-12">
        <h3>ADD NEW BOOK</h3>
      </div>
      <div className="col-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <input
                type="text"
                placeholder="Title"
                className="form-control w-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Author"
                className="form-control w-100"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn text-white w-100" style={{ backgroundColor: '#0290ff' }}>Add Book</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
