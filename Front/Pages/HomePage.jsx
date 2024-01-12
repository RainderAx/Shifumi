import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';
import React, { useState } from 'react';


const TestPage = () => {
  const [texte, setTexte] = useState('ShifumiGame'); 

  const changerTexteAuSurvole = () => {
    setTexte("C'est la maison du content"); 
  };

  const reinitialiserTexte = () => {
    setTexte('ShifumiGame'); 
  };

  return (
    <div className='container'>
      <div>
        <h1
          onMouseOver={changerTexteAuSurvole}
          onMouseOut={reinitialiserTexte}>
          {texte}
        </h1>
      </div>

      <div className='animation'>       
        <ButtonBase variant="main">
          <a href="/">Jouer</a>
        </ButtonBase>
      </div>    

      
        
    </div>
  );
};

export default TestPage;
