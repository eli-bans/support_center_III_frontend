// PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function PrivateRoute({ children, role }) {
  const { user } = useContext(UserContext);

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
