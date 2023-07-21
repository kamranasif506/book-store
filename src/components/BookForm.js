import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { addBookItem } from '../redux/books/bookSlice';
import styles from '../styles/BookForm.module.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuidv4().replace(/-/g, '');

    const newBook = {
      item_id: uniqueId,
      title,
      author,
      category: 'Fiction',
    };

    dispatch(addBookItem(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="row p-3">
      <div className="col-12">
        <h3 className={styles.formTitle}>ADD NEW BOOK</h3>
      </div>
      <div className="col-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <input
                type="text"
                placeholder="Title"
                className={classNames('form-control w-100', styles.nameInput)}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Author"
                className={classNames('form-control w-100', styles.authorInput)}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button type="submit" className={classNames('btn text-white w-100', styles.formBtn)} style={{ backgroundColor: '#0290ff' }}>Add Book</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default BookForm;
