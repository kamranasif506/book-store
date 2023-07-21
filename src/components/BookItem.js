import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { removeBookItem } from '../redux/books/bookSlice';
import styles from '../styles/BookItem.module.css';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();

  // As  circumference = 2 * 3.14 * 70 // 439.6
  // and the formula to calculate offset is offset = circumference * ((100 - 75)/100)
  let strokeDashoffset = 439.6 * ((100 - 70) / 100);
  strokeDashoffset += 'px';
  return (
    <div className="row p-3 mt-3 border bg-white" id={id}>
      <div className="col-5" style={{ margin: 'auto auto' }}>
        <p className={classNames('m-0', styles.schoolOf)}>Action</p>
        <h2 className={classNames('m-0', styles.booktitle)}>{title}</h2>
        <p className={styles.authorName}>{author}</p>
        <ul className="list-inline" style={{ marginTop: '1.313rem' }}>
          <button
            type="button"
            className={classNames('list-inline-item border-0 pr-3 bg-white', styles.comments)}
            style={{ borderRight: '1px solid black !important', paddingRight: '7px' }}
          >
            Comments
          </button>
          <span className={styles.line2} />
          <button
            type="button"
            className={classNames('list-inline-item border-0 pr-3 bg-white', styles.comments)}
            onClick={() => {
              dispatch(removeBookItem(id));
            }}
            style={{ borderRight: '1px solid black !important', paddingRight: '7px' }}
          >
            Remove
          </button>
          <span className={styles.line2} />
          <button
            type="button"
            className={classNames('list-inline-item border-0 pr-3 bg-white', styles.comments)}
          >
            Edit
          </button>
        </ul>
      </div>
      <div className="col-3">
        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
              <circle r="70" cx="80" cy="80" fill="transparent" stroke="#DCDBDC" strokeWidth="12px" />
              <circle r="70" cx="80" cy="80" fill="transparent" stroke="#0290ff" strokeWidth="12px" strokeDasharray="439.6px" strokeDashoffset={strokeDashoffset} />
            </svg>
          </div>
          <div className="col-6" style={{ margin: 'auto auto' }}>
            <h3 className={styles.percentage}>64%</h3>
            <p className={styles.completed}>Completed</p>
          </div>
        </div>
      </div>
      <div className="col-1">
        <span className={styles.line3} />
      </div>
      <div className="col-3 d-grid justify-content-start" style={{ margin: 'auto auto' }}>
        <p className={classNames('m-0', styles.chapter)}>Current Chapter</p>
        <h3 className={styles.lesson}>Chapter 17</h3>
        <button type="button" className={classNames('btn btn-info text-white', styles.progressBtn)} style={{ backgroundColor: '#0290ff' }}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
