import React, { useEffect, useState } from 'react';

// Modal component to display the full-size image
const Modal = ({ imageSrc, onClose }) => {
  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Full-size view" style={styles.modalImage} />
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const MasonryGallery = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedImage, setSelectedImage] = useState(null); // Selected image for modal

  const images = [
    'https://fakeimg.pl/372x600',
    'https://fakeimg.pl/372x295',
    'https://fakeimg.pl/372x295',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading state to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  // Open modal with clicked image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="masonry-gallery">
      {loading ? (
        // Show a loading skeleton while images are loading
        <div className="loading-skeleton">
          <div className="skeleton-item tall"></div>
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
        </div>
      ) : (
        // Render images after loading
        images.map((image, index) => (
          <div
            key={index}
            className={index === 0 ? 'masonry-item tall' : 'masonry-item fade-in'}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(image); }}>
              <img src={image} alt={`Image ${index}`} />
            </a>
          </div>
        ))
      )}

      {/* Show the modal if it's open */}
      {isModalOpen && <Modal imageSrc={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

// Styles for modal
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  modalImage: {
    maxWidth: '80vw',
    maxHeight: '80vh',
    marginBottom: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#f00',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
};

export default MasonryGallery;
