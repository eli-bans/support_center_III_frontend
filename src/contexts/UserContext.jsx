// import context libraries
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  // Initialise user object 
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Initialise api acess token
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem('accessToken');
  });

  // Initialise api refresh token
  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem('refreshToken');
  });

  // Declare error state
  const [error, setError] = useState(null);

  // Initialise variables based on request to api
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }, [user, accessToken, refreshToken]);

  // Register user
  const register = async (email, password) => {

    const is_student = true;
    const is_tutor = false;

    try {
      
      await axios.post('http://127.0.0.1:8000/api/users/', {email, password, is_student, is_tutor});
      return {isSuccess: true, errorMessage: null};
      
    } catch (error) {
      
      console.error("Registration error: ", error);

      if(error.response) {
        // get status code
        const statusCode = error.response.status;
        var errorMessage = null;

        if( statusCode == 400) {
          errorMessage = "Bad Request. Please check your input.";
        } else if (statusCode == 500 ) {
          errorMessage = "Server Error. Please try again later.";
        } else {
          errorMessage = 'An unexpected error occurred. Please try again.';
        }
      }

      return {isSuccess: false, errorMessage: errorMessage};
    }
  };

  // Log user in
  const login = async (email, password) => {

    try {
      
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {email, password});
      const {user, accessToken, refreshToken} = response.data;

      setUser(user);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setError(null);

    } catch (error) {
      
      if (error.response) {
        // get status code
        const statusCode = error.response.statusCode;

        if (statusCode == 401) {
          setError("Invalid Credentials. Try again.");
        } else if (statusCode == 500) {
          setError("Server Error. Try again Later.");
        } else {
          setError("Failed to login. Try again.");
        }
      } else {
        setError("Unexpected Error. Try again.");
      }
    }
  }

  // Log user out of application
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    setError(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, register, login, logout, error }}>
      {children}
    </UserContext.Provider>
  );
};