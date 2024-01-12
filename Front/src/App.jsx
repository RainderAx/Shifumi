import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/login'
import RegisterPage from '../Pages/RegisterPage';
import HomePage from '../Pages/HomePage';


function App() {

  return (
    <>
      <Router>
      <div>
             
     {/* Permet de naviguer entre les différentes pages */}   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
 
    
    </>
  );
}

export default App
