import React from 'react';
import '../styles/Progress.scss';
import PropTypes from 'prop-types';

const BookItem = ({
  key, title, author, onDelete,
}) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="row p-3 mt-3 border bg-white" id={key}>
      <div className="col-5" style={{ margin: 'auto auto' }}>
        <p className="m-0">Action</p>
        <h2 className="m-0">{title}</h2>
        <p>{author}</p>
        <ul className="list-inline m-0">
          <button type="button" className="list-inline-item border-0 pr-3 bg-white" style={{ borderRight: '1px solid black !important', paddingRight: '7px' }}>Comments</button>
          <button type="button" className="list-inline-item border-0 pr-3 bg-white" onClick={handleDelete} style={{ borderRight: '1px solid black !important', paddingRight: '7px' }}>Remove</button>
          <button type="button" className="list-inline-item border-0 pr-3 bg-white">Edit</button>
        </ul>
      </div>
      <div className="col-3">
        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <div className="progress" data-percentage="70">
              <span className="progress-left">
                <span className="progress-bar" />
              </span>
              <span className="progress-right">
                <span className="progress-bar" />
              </span>
              <div className="progress-value"> </div>
            </div>
          </div>
          <div className="col-6" style={{ margin: 'auto auto' }}>
            <h3>64%</h3>
            <p>Complted</p>
          </div>
        </div>
      </div>
      <div className="col-4 d-grid justify-content-end" style={{ margin: 'auto auto' }}>
        <p className="m-0">Current Chapter</p>
        <h3>Chapter 17</h3>
        <button type="button" className="btn btn-info">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookItem;
