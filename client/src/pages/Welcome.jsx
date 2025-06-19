import React from 'react';
import { Link } from 'react-router-dom';
import { logo, aiImage, backgroundImage, logo1, logo2, logo3, logo4, logo5, logo6 } from '../assets';

const Welcome = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <img src={logo} alt="logo" className="w-14 object-cover rounded-lg" />
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            Login
          </Link>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-4">
        <h1 className="font-extrabold text-[#FFFFFF] text-[33px] text-center">Create stunning visuals with the power of AI!</h1>
        <p className="mt-2 text-[#cabfbf] text-[14px] max-w[500px] text-center">ArtifAI is a platform where you can create and share your posts with the world.</p>
        <p className="text-[#cabfbf] text-[13px] max-w[500px] text-center">Join us today and start blooming your vision!</p>
        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="px-2 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          >
            Get Started
          </Link>
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          <div className="flex flex-col items-center mt-16">
            <img src={logo1} alt="logo1" className="w-[250px] h-[190px] object-cover rounded-lg" />
            <img src={logo5} alt="logo5" className="w-[250px] h-[190px] object-cover rounded-lg mt-2" />
          </div>
          <div className="flex flex-col items-center mt-9">
            <img src={logo2} alt="logo2" className="w-[250px] h-[405px] object-cover rounded-lg" />
          </div>
          <div className="flex flex-col items-center mt-16">
            <img src={logo3} alt="logo3" className="w-[250px] h-[190px] object-cover rounded-lg" />
            <img src={logo6} alt="logo6" className="w-[250px] h-[190px] object-cover rounded-lg mt-2" />
          </div>
          <div className="flex flex-col items-center mt-9">
            <img src={logo4} alt="logo4" className="w-[250px] h-[405px] object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Welcome = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
//         <h1 className="text-3xl font-bold text-gray-900">Welcome to Vision Bloom</h1>
//         <p className="text-gray-600">Please login or register to continue.</p>
//         <div className="space-x-4">
//           <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
//             Login
//           </Link>
//           <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Welcome = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
//         <h1 className="text-3xl font-bold text-gray-900">Welcome to Vision Bloom</h1>
//         <p className="text-gray-600">Please login or register to continue.</p>
//         <div className="space-x-4">
//           <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
//             Login
//           </Link>
//           <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;