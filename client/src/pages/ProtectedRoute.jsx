import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Replace this with your actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//   let isAuthenticated = false; // Replace this with your actual authentication logic

//   if (isAuthenticated) {
//     return <Outlet/>
//   } else {
//     return <Navigate to="/" />
//   }
// };

// export default ProtectedRoute;