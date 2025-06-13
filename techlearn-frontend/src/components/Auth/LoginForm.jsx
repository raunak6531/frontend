/**
 * Login Form Component
 *
 * Handles user login with email and password.
 * Includes form validation, loading states, and error handling.
 */

import { useState } from 'react';
import { VALIDATION_RULES, ERROR_MESSAGES } from '../../config/constants.js';

const LoginForm = ({ onSubmit, isLoading = false, error = null }) => {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  /**
   * Handle form submission
   * Validates form data before calling onSubmit
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous validation errors
    setValidationErrors({});

    // Validate form data
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Call parent component's submit handler
    await onSubmit(email.trim(), password);
  };

  /**
   * Validate form data
   * @returns {Object} - Validation errors object
   */
  const validateForm = () => {
    const errors = {};

    // Email validation
    if (!email.trim()) {
      errors.email = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!VALIDATION_RULES.EMAIL_REGEX.test(email.trim())) {
      errors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }

    // Password validation
    if (!password) {
      errors.password = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (password.length < VALIDATION_RULES.MIN_PASSWORD_LENGTH) {
      errors.password = ERROR_MESSAGES.WEAK_PASSWORD;
    }

    return errors;
  };

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /**
   * Handle input changes and clear validation errors
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validationErrors.email) {
      setValidationErrors(prev => ({ ...prev, email: null }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (validationErrors.password) {
      setValidationErrors(prev => ({ ...prev, password: null }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email input field */}
      <div className="relative">
        <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
          className={`pl-10 h-12 bg-gray-700 border text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
            validationErrors.email ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Email"
          autoComplete="email"
          required
        />
        {/* Email validation error */}
        {validationErrors.email && (
          <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
        )}
      </div>

      {/* Password input field */}
      <div className="relative">
        <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          disabled={isLoading}
          className={`pl-10 pr-10 h-12 bg-gray-700 border text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
            validationErrors.password ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Password"
          autoComplete="current-password"
          required
        />
        {/* Password visibility toggle button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          disabled={isLoading}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
        {/* Password validation error */}
        {validationErrors.password && (
          <p className="mt-1 text-sm text-red-400">{validationErrors.password}</p>
        )}
      </div>

      {/* Forgot password link */}
      <div className="flex justify-end">
        <button
          type="button"
          disabled={isLoading}
          className="text-sm text-tech-grey hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 text-white rounded-xl font-medium text-base transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        style={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
          boxShadow: '0 4px 15px rgba(26, 26, 46, 0.4)'
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.target.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1f2937 100%)';
            e.target.style.boxShadow = '0 8px 25px rgba(26, 26, 46, 0.6)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.target.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
            e.target.style.boxShadow = '0 4px 15px rgba(26, 26, 46, 0.4)';
          }
        }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Signing In...
          </div>
        ) : (
          'Get Started'
        )}
      </button>
    </form>
  );
};

export default LoginForm; 