import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectOnLoad = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedPath = localStorage.getItem('currentPath');
    if (storedPath && storedPath !== location.pathname) {
      navigate(storedPath);
    }
  }, []);

  return null;
};

export default RedirectOnLoad;
