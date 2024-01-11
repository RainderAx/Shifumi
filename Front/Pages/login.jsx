import { useState } from 'react';

import RegisterPage from '../Pages/RegisterPage'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer le changement de l'input username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Fonction pour gérer le changement de l'input password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier les informations de connexion

    // connexion avec la db du prof pour la co
    if (username === 'admin' && password === 'password') {
      console.log('Connexion réussie');
      
    } else {
      console.log('Identifiant ou mot de passe incorrect');
      setError('Identifiant ou mot de passe incorrect'); 
    }
  };

  const [error, setError] = useState('');

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>} {"erreur de message, pas le bon mdp pd"}
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
        <button type="submit">Login</button>
      </form>
      <a href="./RegisterPage">Create an account</a>
    </div>
  );

}
export default Login;
