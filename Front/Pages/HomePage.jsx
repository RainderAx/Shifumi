import React, { useState } from 'react';
import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';
import luffy from '../src/assets/luffy.png';
import naruto from '../src/assets/naruto.png';
import goku from '../src/assets/goku.png';

const TestPage = () => {
  const [texte, setTexte] = useState('ShifumiGame');

  const changerTexteAuSurvole = () => {
    setTexte("C'est la maison du content");
  };

  const reinitialiserTexte = () => {
    setTexte('ShifumiGame');
  };

  const GameRules = [
    { logo: goku, title: 'Goku', description: 'Goku bat Luffy' },
    { logo: luffy, title: 'Luffy', description: 'Luffy bat Naruto' },
    { logo: naruto, title: 'Naruto', description: 'Naruto bat Goku' },
  ];

  return (
    <div className='container'>
      <div>
        <h1 onMouseOver={changerTexteAuSurvole} onMouseOut={reinitialiserTexte}>
          {texte}
        </h1>
      </div>

      <div className='animation'>
        <ButtonBase variant='main'>
          <a href='/'>Jouer</a>
        </ButtonBase>
      </div>
      
      <div className='regles'>
        {GameRules.map((rule, index) => (
          <div key={index}>
            <img className='logo' src={rule.logo} alt={rule.title} />
            <h2>{rule.title}</h2>
            <p>{rule.description}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default TestPage;
