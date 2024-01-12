import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';
import Header from './Components&Style/Header';
import Footer from './Components&Style/Footer';

const TestPage = () => {


  return <>
    <Header/>
    <div>
       
       <h1>C'est la maison du content</h1>
    
       <ButtonBase variant="main">
        <a href="/CreateGame" className='link-button-play'>Jouer</a>
       </ButtonBase>
      
    </div>
    <Footer/>
  </>;
};

export default TestPage;
