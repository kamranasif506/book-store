import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  return (
    <div>
      <h1 className="text-center">Welcome to the Categories Page!</h1>
      <h2 className="text-center text-danger">{status}</h2>
    </div>
  );
};

export default Categories;
