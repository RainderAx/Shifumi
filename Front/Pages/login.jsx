import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../src/components/Api/Login-user';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Fonction pour gérer le changement de l'input username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Fonction pour gérer le changement de l'input password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = await loginUser(username, password);
      if (token) {
        console.log('Connexion réussie');
        navigate('/');
      }
    } catch (error) {
      console.error("login error :", error);
      setError('Pas le bon réessaie');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className='btn' type="submit">Login</button>
      </form>
      <a href="./RegisterPage">Create an account</a>
    </div>
  );
};

export default Login;
