/**
 * Authentication Component
 *
 * Main authentication page that handles both login and signup flows.
 * Provides a unified interface for user authentication with proper error handling
 * and loading states.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SocialAuth from './SocialAuth';
import AuthHeader from './AuthHeader';
import FallingCode from './FallingCode';
import { useAuth } from '../../context/AuthContext';

const Auth = () => {
  // Component state
  const [isLogin, setIsLogin] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const { login, signup, isLoading, error, clearError } = useAuth();

  /**
   * Handle user login
   * @param {string} email - User's email address
   * @param {string} password - User's password
   */
  const handleLogin = async (email, password) => {
    try {
      setIsSubmitting(true);
      setAuthError(null);
      clearError(); // Clear any previous auth context errors

      // Attempt to login user
      const result = await login(email, password);

      if (result.success) {
        // Login successful - navigate to dashboard
        navigate('/dashboard');
      } else {
        // Login failed - show error message
        setAuthError(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle unexpected errors
      setAuthError('An unexpected error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handle user signup/registration
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @param {string} name - User's full name
   * @param {Object} additionalData - Additional user data (mobile, gender, github)
   */
  const handleSignup = async (email, password, name, additionalData = {}) => {
    try {
      setIsSubmitting(true);
      setAuthError(null);
      clearError(); // Clear any previous auth context errors

      // Attempt to register user
      const result = await signup(email, password, name, additionalData);

      if (result.success) {
        // Signup successful - navigate to dashboard
        navigate('/dashboard');
      } else {
        // Signup failed - show error message
        setAuthError(result.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle unexpected errors
      setAuthError('An unexpected error occurred. Please try again.');
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Toggle between login and signup forms
   * Clears any existing errors when switching forms
   */
  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setAuthError(null); // Clear errors when switching forms
    clearError(); // Clear auth context errors
  };

  // Determine if any loading state is active
  const isLoadingState = isLoading || isSubmitting;

  // Get the current error message (prioritize local error over context error)
  const currentError = authError || error;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-tech-blue to-gray-800 flex items-center justify-center p-4 relative auth-page">
      {/* Animated background code elements */}
      <FallingCode />

      <div className="w-full max-w-md z-10">
        <div className="p-6 shadow-2xl bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl animate-fade-in">
          {/* Authentication header with title and description */}
          <AuthHeader isLogin={isLogin} />

          {/* Error message display */}
          {currentError && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm text-center">{currentError}</p>
            </div>
          )}

          {/* Authentication forms */}
          {isLogin ? (
            <LoginForm
              onSubmit={handleLogin}
              isLoading={isLoadingState}
              error={currentError}
            />
          ) : (
            <SignupForm
              onSubmit={handleSignup}
              isLoading={isLoadingState}
              error={currentError}
            />
          )}

          {/* Social authentication options */}
          <SocialAuth />

          {/* Toggle between login and signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
              <button
                type="button"
                onClick={toggleAuth}
                disabled={isLoadingState}
                className="ml-2 text-tech-grey hover:text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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