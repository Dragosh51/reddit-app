import React from 'react';
import './Card.css';

const Card = ({obj}) => {
  return (
    <div className="individualCard">
        <h2>{obj.title}</h2>
        <p>{obj.description}</p>
    </div>
  )
};

export default Card;
