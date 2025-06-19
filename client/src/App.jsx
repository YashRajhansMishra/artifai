import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Welcome, Home, CreatePost, Login, ProtectedRoute, Register, Logout } from './pages';
import { logo } from './assets'; // Adjust the path to your logo

const AppContent = () => {
  const location = useLocation();

  // Check if the current path is the authentication, registration, or welcome path
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

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import { Welcome, Home, CreatePost, Login, ProtectedRoute, Register } from './pages';
// import { logo } from './assets'; // Adjust the path to your logo

// const AppContent = () => {
//   const location = useLocation();

//   // Check if the current path is the authentication, registration, or welcome path
//   const isAuthOrRegisterOrWelcomePath = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';

//   return (
//     <>
//       {!isAuthOrRegisterOrWelcomePath && (
//         <header className="w-full flex justify-between items-center bg-[#10102e] sm:px-14 px-4 py-2">
//           <Link to="/home">
//             <img src={logo} alt="logo" className="w-14 object-contain" />
//           </Link>
//           <Link to="/create-post" className="font-inter font-medium bg-[#035bff] text-white px-4 py-2 rounded-md">
//             + Create new post
//           </Link>
//         </header>
//       )}
//       <main className={`w-full ${!isAuthOrRegisterOrWelcomePath ? 'sm:p-8 px-4 py-8 bg-[#090917] min-h-[calc(100vh-73px)]' : 'bg-white min-h-screen'}`}>
//         <Routes>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/create-post" element={<CreatePost />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </main>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;



// const AppContent = () => {
//   const location = useLocation();

//   // Check if the current path is the authentication, registration, or welcome path
//   const isAuthOrRegisterOrWelcomePath = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';

//   return (
//     <>
//       {!isAuthOrRegisterOrWelcomePath && (
//         <header className="w-full flex justify-between items-center bg-[#10102e] sm:px-14 px-4 py-2">
//           <Link to="/home">
//             <img src={logo} alt="logo" className="w-14 object-contain" />
//           </Link>
//           <Link to="/create-post" className="font-inter font-medium bg-[#035bff] text-white px-4 py-2 rounded-md">
//             + Create new post
//           </Link>
//         </header>
//       )}
//       <main className={`sm:p-8 px-4 py-8 w-full ${!isAuthOrRegisterOrWelcomePath ? 'bg-[#090917] min-h-[calc(100vh-73px)]' : 'bg-white min-h-screen'}`}>
//         <Routes>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//           <Route path="/create-post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
//           <Route path="/login" element={<Authentication />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </main>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;


// const App = () => {
//   const location = useLocation();

//   // Check if the current path is the authentication path
//   const isAuthPath = location.pathname === '/';

//   return (
//     <>
//       {isAuthPath ? (
//         <Authentication />
//       ) : (
//         <BrowserRouter>
//           <header className="w-full flex justify-between items-center bg-[#10102e] sm:px-14 px-4 py-2">
//             <Link to="/home">
//               <img src={logo} alt="logo" className="w-14 object-contain" />
//             </Link>

//             <Link to="/create-post" className="font-inter font-medium bg-[#035bff] text-white px-4 py-2 rounded-md">+ Create new post</Link>
//           </header>
//           <main className="sm:p-8 px-4 py-8 w-full bg-[#090917] min-h-[calc(100vh-73px)]">
//             <Routes>
//               <Route path="/home" element={<Home />} />
//               <Route path="/create-post" element={<CreatePost />} />
//             </Routes>
//           </main>
//         </BrowserRouter>
//       )}
//     </>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import { logo } from './assets';
// import { Home, CreatePost, Authentication } from './pages';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <header className="w-full flex justify-between items-center bg-[#10102e] sm:px-14 px-4 py-2">
//         <Link to="/home">
//           <img src={logo} alt="logo" className="w-14 object-contain" />
//         </Link>

//         <Link to="/create-post" className="font-inter font-medium bg-[#035bff] text-white px-4 py-2 rounded-md">+ Create new post</Link>
//       </header>
//       <main className="sm:p-8 px-4 py-8 w-full bg-[#090917] min-h-[calc(100vh-73px)]">
//         <Routes>
//           <Route path="/" element={<Authentication />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/create-post" element={<CreatePost />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

// import { logo } from './assets';
// import { Home, CreatePost, Authentication } from './pages';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Main Page */}
//         <Route path="/" element={<Authentication />} />

//         {/* Home Page */}
//         <Route
//           path="/home"
//           element={
//             <>
//               <header className="w-full flex justify-between items-center bg-[#10102e] sm:px-14 px-4 py-2">
//                 <Link to="/">
//                   <img src={logo} alt="logo" className="w-14 object-contain" />
//                 </Link>
//                 <Link
//                   to="/create-post"
//                   className="font-inter font-medium bg-[#035bff] text-white px-4 py-2 rounded-md"
//                 >
//                   + Create new post
//                 </Link>
//               </header>
//               <main className="sm:p-8 px-4 py-8 w-full bg-[#090917] min-h-[calc(100vh-73px)]">
//                 <Home />
//               </main>
//             </>
//           }
//         />

//         {/* Create Post Page */}
//         <Route path="/create-post" element={<CreatePost />} />

//         {/* Redirect unknown routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
