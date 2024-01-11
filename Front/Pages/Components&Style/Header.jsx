import React from 'react';
import './Header.css';
import { ButtonBase } from './Button';

const handleRedirect = () => {
    window.open("https://www.karminecorp.fr/shop", "_blank");
  };

export default function Header() {
    return<>
        <div className='header'>
            <div className='links'>
                <ButtonBase variant="Idwin" onClick={handleRedirect}>Nah I'd Win</ButtonBase>
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>               
            </div>
        </div>
    </>;
};
