import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [location, navigate]);

  return (
    <div className="page-container">
      <h2>Authenticating...</h2>
      <p>Please wait.</p>
    </div>
  );
};

export default AuthSuccess;