import React from 'react';
//import './Content.scss';

const Content = ({ text }) => {
  return <div className='text-section'>
            <h1>WHAT DOES COOKING MEAN?</h1>
            <hr></hr>
            <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
            <p><span className='the-perfect-egg'>THE PERFECT EGG</span></p>
            <p className='call-out'>Keep water between 67 and 68°C for a flavourful, tender yolk</p>
          </div>
};

export default Content;
