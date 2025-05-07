import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import picture from '../assets/Doctor.png';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';



const Login = () => {
 
  const navigate = useNavigate();
   const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dummyToken = "abc123.jwt.token";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '1' && password === '12') {
    dispatch(AuthActions.loginSuccess({email,password, token: dummyToken}));
    navigate('/home')
    }else {
      alert('Invalid credentials!');
    }
  };


 
  const [showPassword, setShowPassword] = useState(false);
 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
      <div className="bg-white rounded-xl shadow-xl overflow-hidden w-ful flex">
        {/* Left div - Form */}
        <div className="w-full md:w-1/3 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-500 mt-2">Enter your credentials to continue</p>
          </div>

          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
              
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

           
       
         <button
           type='submit'
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-md"
            >
              {/* {isAuth ? "Logged In" : "Login"} */}login
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Right div - Image */}
        <div className="hidden md:block md:w-2/3 bg-blue-100">
          <img 
            src={picture} 
            alt="Login Illustration" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    
  );
};

export default Login;