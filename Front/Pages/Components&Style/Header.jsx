import React from 'react';
import './Header.css';
import { ButtonBase } from './Button';

const handleRedirect = () => {
  window.open("https://www.karminecorp.fr/shop", "_blank");
};

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="links">
          <ButtonBase  variant ="Idwin" onClick={handleRedirect}>Nah I'd Win</ButtonBase>
          <ButtonBase variant="link"><a href="/" >Accueil</a></ButtonBase>
          <ButtonBase variant="link">
                <a href="/login">Les Logs</a>
          </ButtonBase>
        </div>
      </div>
    </>
  );
};

