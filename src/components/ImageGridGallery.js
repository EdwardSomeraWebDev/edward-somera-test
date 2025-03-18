import React from 'react';
import Card from './Card';
//import './ImageGridGallery.scss'; // Create a SCSS file for styling

const ImageGridGallery = () => {
  const images = [
    { image: 'https://fakeimg.pl/375x300', title: 'Red', description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.' },
    { image: 'https://fakeimg.pl/375x300', title: 'Green', description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours' },
    { image: 'https://fakeimg.pl/375x300', title: 'White', description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.' },
  ];

  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <Card
          key={index}
          image={img.image}
          title={img.title}
          description={img.description}
        />
      ))}
    </div>
  );
};

export default ImageGridGallery;
