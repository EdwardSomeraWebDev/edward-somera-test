import React from 'react';

const ImageGridGallery = () => {
  const images = [
    { src: './assets/img/1.jpg', alt: 'Image 1' }, // For the first column (1 image)
    { src: 'https://fakeimg.pl/600x400', alt: 'Image 2' }, // For the second column (2 images)
    { src: 'https://fakeimg.pl/600x400', alt: 'Image 3' },
  ];

  return (
    <div className="image-gallery">
        <img src={images[0].src} alt={images[0].alt} className="grid-image" />
        {images.slice(1).map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="grid-image" />
        ))}
    </div>
  );
};

export default ImageGridGallery;
