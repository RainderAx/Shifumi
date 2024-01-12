import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/login'
import RegisterPage from '../Pages/RegisterPage';
import HomePage from '../Pages/HomePage';
import Header from '../Pages/Components&Style/Header';
import Footer from '../Pages/Components&Style/Footer';


function App() {

  return (
    <>

      <Router>
      <Header/>
      <div className='container'>
             
     {/* Permet de naviguer entre les différentes pages */}   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    
    
    </>
  );
}

export default App
