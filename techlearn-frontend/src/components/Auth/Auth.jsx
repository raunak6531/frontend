import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SocialAuth from './SocialAuth';
import AuthHeader from './AuthHeader';
import FallingCode from './FallingCode';
import { useAuth } from '../../context/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login, signup } = useAuth();

  const handleLogin = (email, password) => {
    login(email, password);
    navigate('/dashboard');
  };

  const handleSignup = (email, password, name) => {
    signup(email, password, name);
    navigate('/dashboard');
  };

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-tech-blue to-gray-800 flex items-center justify-center p-4 relative auth-page">
      <FallingCode />

      <div className="w-full max-w-md z-10">
        <div className="p-6 shadow-2xl bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl animate-fade-in">
          <AuthHeader isLogin={isLogin} />

          {isLogin ? (
            <LoginForm onSubmit={handleLogin} />
          ) : (
            <SignupForm onSubmit={handleSignup} />
          )}

          <SocialAuth />

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
              <button
                type="button"
                onClick={toggleAuth}
                className="ml-2 text-tech-grey hover:text-white font-medium transition-colors"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 