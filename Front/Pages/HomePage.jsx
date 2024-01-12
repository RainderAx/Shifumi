import './Components&Style/HomePage.css';
import { ButtonBase } from './Components&Style/Button';


const TestPage = () => {


  return <>
    <div className='container'>
       
       <h1>C'est la maison du content</h1>
    
       <ButtonBase variant="main">
        <a href="/CreateGame" className='link-button-play'>Jouer</a>
       </ButtonBase>
      
    </div>
    
  </>;
};

export default TestPage;
