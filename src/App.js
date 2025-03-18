// src/App.js
import React from 'react';
import './App.css';
import './styles.scss';  
import ImageGridGallery from './components/ImageGridGallery';
import Content from './components/Content';
//import ImageGrid from './components/ImageGallery';
import MasonryGallery from './components/Masonry';

function App() {
  return (
    <div className="App main">
      <div className="container container__flex">
        <div className='container__flex__left'><MasonryGallery /></div>
        <div className='container__flex__left'><Content /></div>
      </div>
      <div className='container'>
        <h2>TASTE THE COLORS</h2>
        <hr className='small'></hr>
        <ImageGridGallery />
      </div>
    </div>
  );
}

export default App;
