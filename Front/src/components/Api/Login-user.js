import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { keepTokenAndUsername } from './Local-token';

const API_URL = 'http://fauques.freeboxos.fr:3000';

export const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://fauques.freeboxos.fr:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        keepTokenAndUsername(data.token, username);
        return data.token;
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
};
export async function registerUser(username, password) {
  const idUser = uuidv4();
  try {
    const response = await axios.post(`${API_URL}/register`, { id_: idUser, username, password });
    if (response.data.success) {
      return { status: 'success', data: response.data };
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    return { status: 'error', message: error.message };
  }
}
