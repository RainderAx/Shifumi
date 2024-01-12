import { keepTokenAndUsername } from "./Local-token";

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

