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
}