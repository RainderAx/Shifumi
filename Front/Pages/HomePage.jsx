/* eslint-disable react/no-unescaped-entities */



import './Components&Style/HomePage.css';

const handleRedirect = () => {
  window.location.href = "https://www.karminecorp.fr/shop";
};

const TestPage = () => {


  return (
    
    <div>
       <h1>C'est la maison du content</h1>
       <button onClick={handleRedirect} >Nah I'd Win</button>
       <button className='main-button'><a href="/login" className='link-button-play'>Jouer</a></button>
       
    </div>
    
  );
};

export default TestPage;
