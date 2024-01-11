import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Pages/login'

import './HomePage.css';

const handleRedirect = () => {
  window.location.href = "https://www.karminecorp.fr/shop";
};

const TestPage = () => {


  return (
    
    <div>
       <button className='main-button'><a href="/login" className='link-button-play'>Jouer</a></button>*
       <h1>C'est la maison du content</h1>
       <button onClick={handleRedirect} className="btn">Nah I'd Win</button>
       
    </div>
    
  );
};

export default TestPage;
