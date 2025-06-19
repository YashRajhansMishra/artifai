import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Welcome, Home, CreatePost, Login, ProtectedRoute, Register, Logout } from './pages';
import { logo } from './assets';

const AppContent = () => {
  const location = useLocation();

  const isAuthOrRegisterOrWelcomePath = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/welcome';

  return (
    <>
      {!isAuthOrRegisterOrWelcomePath && (
        <header className="w-full flex justify-between items-center bg-[#10102e] sm:px-14 px-4 py-2">
          <Link to="/home">
            <img src={logo} alt="logo" className="w-14 object-cover rounded-lg" />
          </Link>
          <div className="flex space-x-4">
            <Link to="/create-post" className="font-inter font-medium bg-[#035bff] text-white px-4 py-2 rounded-md">
              + Create new post
            </Link>
            <Link to="/welcome" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
              Logout
            </Link>
          </div>
        </header>
      )}
      <main className={`w-full ${!isAuthOrRegisterOrWelcomePath ? 'sm:p-8 px-4 py-8 bg-[#090917] min-h-[calc(100vh-73px)]' : 'bg-white min-h-screen'}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/welcome/*" element={<Navigate to="/welcome" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
