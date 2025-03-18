import React, { useEffect, useState } from 'react';

const MasonryGallery = () => {
    const [loading, setLoading] = useState(true);
    const images = [
        'https://fakeimg.pl/372x600',
        'https://fakeimg.pl/372x295',
        'https://fakeimg.pl/372x295',
    ];
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); // After 2 seconds, content will be loaded
        }, 2000);
    
        return () => clearTimeout(timer); // Clean up timeout on unmount
      }, []);
    
      return (
        <div className="masonry-gallery">
          {loading ? (
            // Show a loading skeleton or animation while loading
            <div className="loading-skeleton">
              <div className="skeleton-item tall"></div>
              <div className="skeleton-item"></div>
              <div className="skeleton-item"></div>
            </div>
          ) : (
            // Show images after loading
            images.map((image, index) => (
                <div key={index} className={index === 0 ? 'masonry-item tall' : 'masonry-item fade-in'}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))
          )}
        </div>
      );
    };
    
    export default MasonryGallery;