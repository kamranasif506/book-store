import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookItem } from '../redux/books/bookSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemId = uuidv4();

    // const newBook = {
    //   item_id: newItemId,
    //   title,
    //   author,
    //   category: "Fiction",
    // };
    const newBook = {
      item_id: newItemId,
      title: 'The title of the book',
      author: 'The author of the book',
      category: 'The category of the book',
    };

    dispatch(addBookItem(newBook));
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

export default BookForm;
