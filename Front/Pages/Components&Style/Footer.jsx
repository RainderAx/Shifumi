import React from 'react';
import './Footer.css';
import Win from '../../src/assets/Win.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <a href="https://www.youtube.com/watch?v=G0sdGOvBQT4"><img src={Win} alt="Win" className='logo'/></a>
    </div>
  );
}


