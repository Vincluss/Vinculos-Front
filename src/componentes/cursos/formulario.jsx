import React from 'react';

const Rating = ({ onClick }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => onClick(value)}
          style={{ cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;