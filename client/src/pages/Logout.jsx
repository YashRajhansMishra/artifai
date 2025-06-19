import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/welcome');
    }).catch((error) => {
      
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
