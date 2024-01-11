import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (username, password) => {
    const idUser = uuidv4();
    try {
      const response = await fetch('http://fauques.freeboxos.fr:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_: idUser, username, password }),
      });
      console.log('Response: ',response);
  
      if (response.ok) {
        const data = await response.json();

        console.log('Data: ',data);
        
        return data.token;
      } else {
        const message = `Register failed with status ${response.status} and message ${await response.text()}`;
        throw new Error(message);
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
};
