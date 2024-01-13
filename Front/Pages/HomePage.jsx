import React, { useState, useEffect } from 'react';
import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';
import luffy from '../src/assets/luffy.png';
import naruto from '../src/assets/naruto.png';
import goku from '../src/assets/goku.png';

const TestPage = () => {
  const [texte, setTexte] = useState('ShifumiGame');


//animation h1
  const changerTexteAuSurvole = () => {
    setTexte("C'est la maison du content");
  };
  const reinitialiserTexte = () => {
    setTexte('ShifumiGame');
  };

//token verification
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedToken = window.localStorage.getItem('token'); 
  useEffect(() => {
    checkLoginStatus();
  }, []);  
  const checkLoginStatus = async () => {
    try {
      console.log("Vérification du statut de connexion...");
      if (storedToken) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setIsLoggedIn(false);
    }
  };

  const handleLogin = () => {
    checkLoginStatus();
  };

//les logos
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
          {!isLoggedIn && (
            <ButtonBase variant='main'onClick={handleLogin}>
                <a href='/Login'>Login</a>
            </ButtonBase>
          )}

          {isLoggedIn && (
            <ButtonBase variant='main' onClick={handleLogin} >
                <a href='/match'>Jouer</a>
            </ButtonBase>
          )}
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
