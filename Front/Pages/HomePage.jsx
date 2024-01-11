import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';

const handleRedirect = () => {
  window.location.href = "https://www.karminecorp.fr/shop";
};

const TestPage = () => {


  return (
    
    <div>
       <h1>C'est la maison du content</h1>
       <ButtonBase onClick={handleRedirect}>Nah I'd Win</ButtonBase>

       <ButtonBase variant="link">
        <a href="/login" className='link-button-play'>Les Logs</a>
       </ButtonBase>

       <ButtonBase variant="main">
        <a href="/CreateGame" className='link-button-play'>Jouer</a>
       </ButtonBase>
       
    </div>
    
  );
};

export default TestPage;
