/**
 * Signup Form Component
 *
 * Handles user registration with comprehensive form validation.
 * Includes all required and optional fields for user registration.
 */

import { useState } from 'react';
import { VALIDATION_RULES, ERROR_MESSAGES } from '../../config/constants.js';

const SignupForm = ({ onSubmit, isLoading = false, error = null }) => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [github, setGithub] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    // Prepare additional user data
    const additionalData = {};
    if (mobile.trim()) additionalData.mobile = mobile.trim();
    if (gender) additionalData.gender = gender;
    if (github.trim()) additionalData.github = github.trim();

    // Call parent component's submit handler
    await onSubmit(email.trim(), password, name.trim(), additionalData);
  };

  /**
   * Validate form data
   * @returns {Object} - Validation errors object
   */
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!name.trim()) {
      errors.name = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (name.trim().length < VALIDATION_RULES.MIN_NAME_LENGTH) {
      errors.name = 'Name must be at least 2 characters long';
    } else if (name.trim().length > VALIDATION_RULES.MAX_NAME_LENGTH) {
      errors.name = 'Name must be less than 50 characters long';
    }

    // Email validation
    if (!email.trim()) {
      errors.email = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!VALIDATION_RULES.EMAIL_REGEX.test(email.trim())) {
      errors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }

    // Mobile validation (optional field)
    if (mobile.trim() && !VALIDATION_RULES.PHONE_REGEX.test(mobile.trim())) {
      errors.mobile = ERROR_MESSAGES.INVALID_PHONE;
    }

    // GitHub validation (optional field)
    if (github.trim() && !VALIDATION_RULES.GITHUB_REGEX.test(github.trim())) {
      errors.github = 'Invalid GitHub username format';
    }

    // Password validation
    if (!password) {
      errors.password = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (password.length < VALIDATION_RULES.MIN_PASSWORD_LENGTH) {
      errors.password = ERROR_MESSAGES.WEAK_PASSWORD;
    }

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = ERROR_MESSAGES.PASSWORDS_DONT_MATCH;
    }

    return errors;
  };

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /**
   * Handle input changes and clear validation errors
   */
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (validationErrors.name) {
      setValidationErrors(prev => ({ ...prev, name: null }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validationErrors.email) {
      setValidationErrors(prev => ({ ...prev, email: null }));
    }
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    if (validationErrors.mobile) {
      setValidationErrors(prev => ({ ...prev, mobile: null }));
    }
  };

  const handleGithubChange = (e) => {
    setGithub(e.target.value);
    if (validationErrors.github) {
      setValidationErrors(prev => ({ ...prev, github: null }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (validationErrors.password) {
      setValidationErrors(prev => ({ ...prev, password: null }));
    }
    // Also clear confirm password error if passwords now match
    if (validationErrors.confirmPassword && e.target.value === confirmPassword) {
      setValidationErrors(prev => ({ ...prev, confirmPassword: null }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (validationErrors.confirmPassword) {
      setValidationErrors(prev => ({ ...prev, confirmPassword: null }));
    }
  };

  return (
    <div className="max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <form onSubmit={handleSubmit} className="space-y-3 pb-4">
        {/* Full Name input field */}
        <div className="relative">
          <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            disabled={isLoading}
            className={`pl-10 h-12 bg-gray-700 border text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
              validationErrors.name ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Full Name"
            autoComplete="name"
            required
          />
          {/* Name validation error */}
          {validationErrors.name && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
          )}
        </div>

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

        {/* Mobile Number input field (optional) */}
        <div className="relative">
          <i className="fas fa-mobile-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
            disabled={isLoading}
            className={`pl-10 h-12 bg-gray-700 border text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
              validationErrors.mobile ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Mobile Number (Optional)"
            autoComplete="tel"
          />
          {/* Mobile validation error */}
          {validationErrors.mobile && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.mobile}</p>
          )}
        </div>

        {/* Gender selection field (optional) */}
        <div className="relative">
          <i className="fas fa-venus-mars absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={isLoading}
            className="pl-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full appearance-none pr-10 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select Gender (Optional)</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {/* GitHub Profile input field (optional) */}
        <div className="relative">
          <i className="fab fa-github absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type="text"
            id="github"
            value={github}
            onChange={handleGithubChange}
            disabled={isLoading}
            className={`pl-10 h-12 bg-gray-700 border text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
              validationErrors.github ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="GitHub Username (Optional)"
            autoComplete="username"
          />
          {/* GitHub validation error */}
          {validationErrors.github && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.github}</p>
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
            autoComplete="new-password"
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

        {/* Confirm Password input field */}
        <div className="relative">
          <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            disabled={isLoading}
            className={`pl-10 pr-10 h-12 bg-gray-700 border text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
              validationErrors.confirmPassword ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Confirm Password"
            autoComplete="new-password"
            required
          />
          {/* Confirm password visibility toggle button */}
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            disabled={isLoading}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          </button>
          {/* Confirm password validation error */}
          {validationErrors.confirmPassword && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.confirmPassword}</p>
          )}
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
              Creating Account...
            </div>
          ) : (
            'Create Account'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;