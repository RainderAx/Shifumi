import React, { useState } from 'react';
import { useUser, registerUser, saveTokenToLocalStorage } from 'path-to-your-user-module';

export default function RegisterPage() {
  const { dispatch, setUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const token = await registerUser(username, password);
      saveTokenToLocalStorage(token);
      setUser(dispatch, { username, token });
      setSuccess(true);
    } catch (error) {
      console.error('Register error:', error);
      setError('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-login" onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Identifiant"
        className="input-field"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password" 
        placeholder="Mot de passe"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="connexion-button" type="submit" disabled={loading}>
        {loading ? 'Chargement...' : 'S\'inscrire'}
      </button>
      {error && <div className="error-message">{error}</div>}
      {success ? (
        <div className="success-message">
          <p>Inscription réussie, vous pouvez à présent vous <a href="/login">connecter</a></p>
        </div>
      ) : (
        <p>Vous avez déjà un compte ? <a href="/login">Se connecter</a></p>
      )}
    </form>
  );
}
