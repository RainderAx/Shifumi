import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUsername } from '../Api/Local-token';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = getUsername();
      setUser(storedUser);
    } catch (error) {
      console.error('Failed to get user from local storage:', error);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };