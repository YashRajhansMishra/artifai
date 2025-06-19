import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import googleLogo from '../assets/google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home', { replace: true });
    } catch (error) {
      setError('Account not found. Please register before attempting to sign in.');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data to Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        username: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      navigate('/home', { replace: true });
    } catch (error) {
      setError('Invalid authentication credentials provided');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <span className="text-gray-500">or continue with</span>
          <button
            onClick={handleGoogleSignIn}
          >
            <img src={googleLogo} alt="Google Logo" />
          </button>
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{' '}
          <span
            onClick={handleRegister}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, googleProvider } from '../firebaseConfig';
// import googleLogo from '../assets/google.png';

// const Authentication = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/home', { replace: true });
//     } catch (error) {
//       setError('Account not found. Please register before attempting to sign in.');
//     }
//   };

//   const handleRegister = async () => {
//     navigate('/register');
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate('/home', { replace: true });
//     } catch (error) {
//       setError('Invalid authentication credentials provided');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-center mb-4">{success}</p>}
//         <form onSubmit={handleLogin}>
//           <div className="mb-5">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div className="flex flex-col space-y-3">
//             <button
//               type="submit"
//               className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow-lg transition duration-200"
//             >
//               Sign In
//             </button>
//             <button
//               type="button"
//               onClick={handleRegister}
//               className="w-full py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg font-medium shadow-lg transition duration-200"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleGoogleSignIn}
//           >
//             <span className='text-xs'>--Or continue with--</span>
//             <img src={googleLogo} alt="Google Logo" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Authentication;


// import React from 'react';

// const Authentication = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-[#10102e]">
//       <div className="bg-white p-8 rounded-md shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="username"
//               type="text"
//               placeholder="Username"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="******************"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Authentication;