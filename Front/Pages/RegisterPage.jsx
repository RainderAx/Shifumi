import { useState } from 'react';
import { registerUser } from '../src/components/Api/Register-user';
import { useNavigate } from 'react-router-dom';
import './Components&Style/RegisterPages.css';

const RegisterPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      const token = await registerUser(username, password);
      console.log('userToken :', token);
      console.log('Connexion réussie, redirection vers la page de connexion');
      setAccountCreated(true);
      navigate('/login');

      

      
    } catch (error) {
      console.error('Une erreur est survenue lors de l\'inscription', error);
      setErrorMessage('Une erreur est survenue lors de l\'inscription');
    }
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {accountCreated ? (
        <p>Votre compte a été créé avec succès!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username :</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <label>Confirmer le mot de passe:</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </div>
          <button className='btn' type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;

