import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';
import Header from './Components&Style/Header';
import Footer from './Components&Style/Footer';

const handleRedirect = () => {
  window.open("https://www.karminecorp.fr/shop", "_blank");
};

const TestPage = () => {


  return (
    
    <div>
       <Header/>
       <h1>C'est la maison du content</h1>
    
       <ButtonBase variant="link">
        <a href="/login" className='link-button-play'>Les Logs</a>
       </ButtonBase>

       <ButtonBase variant="main">
        <a href="/CreateGame" className='link-button-play'>Jouer</a>
       </ButtonBase>
       <Footer/>
    </div>
    
  );
};

export default TestPage;
