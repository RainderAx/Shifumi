import React from 'react';
import './Footer.css';
import Win from '../../src/assets/Win.svg';
import { ButtonBase } from './Button';

export default function Footer() {
  return (
    
    <div className='footer'>
      <ButtonBase variant="round" onClick={() => window.open("https://www.youtube.com/watch?v=G0sdGOvBQT4", "_blank")}>
        <img src={Win} alt="Win" className='logo' style={{ width: "250%", height: "250%" }} />
      </ButtonBase>

    </div>
  );
}


