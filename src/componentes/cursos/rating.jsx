// Rating.js
import { useState } from 'react';
import Style from "@/src/css/cursos.module.css";

const Rating = ({ maxRating = 5, onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);        
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => (
        <span className={Style.ratingg}
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{
            cursor: 'pointer',
            color: index < rating ? 'gold' : 'gray',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
