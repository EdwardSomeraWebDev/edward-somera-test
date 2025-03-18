import React from 'react';
//import './Card.scss'; // Create a SCSS file for styling

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="Tight-Top" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
