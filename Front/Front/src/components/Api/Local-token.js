export const getToken = () => {
    return localStorage.getItem('userToken');
  };

export const keepTokenAndUsername = (token, username) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('username', username);
  };

export const removeTokenAndUsername = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
  }

export const getUsername = () => {
    const token = localStorage.getItem('userToken');
    const username = localStorage.getItem('username');
  return { token, username };
};

  export const saveToken = (token) => {
    localStorage.setItem('userToken', token);
};

