/**
 * Authentication Context
 *
 * This context provides authentication state and methods throughout the application.
 * It handles user login, signup, logout, and maintains authentication state.
 *
 * Features:
 * - Real API integration for authentication
 * - Persistent user sessions using localStorage
 * - Loading states for better UX
 * - Error handling for authentication failures
 * - Automatic token management
 */

import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService.js';
import { APP_CONFIG, SUCCESS_MESSAGES } from '../config/constants.js';
import { handleAuthError, logError } from '../utils/errorHandler.js';

// Create authentication context
const AuthContext = createContext(null);

/**
 * Authentication Provider Component
 * Wraps the application and provides authentication state and methods
 */
export const AuthProvider = ({ children }) => {
  // Authentication state
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Initialize authentication state on app start
   * Checks for existing user session in localStorage
   */
  useEffect(() => {
    initializeAuth();
  }, []);

  /**
   * Initialize authentication state
   * Loads user data from localStorage and validates session
   */
  const initializeAuth = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check if user is authenticated using the auth service
      if (authService.isAuthenticated()) {
        const userData = authService.getCurrentUser();

        if (userData) {
          setUser(userData);

          // Optionally verify token with server
          // await validateSession();
        }
      }
    } catch (error) {
      logError(error, 'AuthContext.initializeAuth');
      // Clear invalid session data
      authService.clearAuthData();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * User login function
   * Makes API call to authenticate user and stores session data
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @returns {Promise<Object>} - Login result with user data
   */
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      // Call authentication service to login user
      const result = await authService.login(email, password);

      if (result.success && result.user) {
        // Update user state with authenticated user data
        setUser(result.user);

        // Log successful login in development mode
        if (APP_CONFIG.IS_DEV) {
          console.log('✅ User logged in successfully:', result.user.email);
        }

        return {
          success: true,
          user: result.user,
          message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
        };
      }

      throw new Error('Login failed - no user data received');

    } catch (error) {
      // Handle login errors
      const errorMessage = handleAuthError(error);
      setError(errorMessage);
      logError(error, 'AuthContext.login');

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * User signup/registration function
   * Makes API call to create new user account and stores session data
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @param {string} name - User's full name
   * @param {Object} additionalData - Additional user data (mobile, gender, github)
   * @returns {Promise<Object>} - Signup result with user data
   */
  const signup = async (email, password, name, additionalData = {}) => {
    try {
      setIsLoading(true);
      setError(null);

      // Prepare user data for signup
      const userData = {
        email,
        password,
        name,
        ...additionalData, // Include mobile, gender, github if provided
      };

      // Call authentication service to register user
      const result = await authService.signup(userData);

      if (result.success && result.user) {
        // Update user state with new user data
        setUser(result.user);

        // Log successful signup in development mode
        if (APP_CONFIG.IS_DEV) {
          console.log('✅ User registered successfully:', result.user.email);
        }

        return {
          success: true,
          user: result.user,
          message: SUCCESS_MESSAGES.SIGNUP_SUCCESS,
        };
      }

      throw new Error('Signup failed - no user data received');

    } catch (error) {
      // Handle signup errors
      const errorMessage = handleAuthError(error);
      setError(errorMessage);
      logError(error, 'AuthContext.signup');

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * User logout function
   * Clears user session and notifies server
   * @returns {Promise<void>}
   */
  const logout = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Call authentication service to logout user
      await authService.logout();

      // Clear user state
      setUser(null);

      // Log successful logout in development mode
      if (APP_CONFIG.IS_DEV) {
        console.log('✅ User logged out successfully');
      }

    } catch (error) {
      // Even if logout API call fails, clear local state
      setUser(null);
      logError(error, 'AuthContext.logout');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clear error state
   * Utility function to clear any authentication errors
   */
  const clearError = () => {
    setError(null);
  };

  /**
   * Refresh user session
   * Attempts to refresh the authentication token
   */
  const refreshSession = async () => {
    try {
      setIsLoading(true);
      const result = await authService.refreshToken();

      if (result.token) {
        // Token refreshed successfully, user remains logged in
        return { success: true };
      }

      throw new Error('Token refresh failed');

    } catch (error) {
      // Refresh failed, logout user
      await logout();
      logError(error, 'AuthContext.refreshSession');

      return { success: false, error: handleAuthError(error) };
    } finally {
      setIsLoading(false);
    }
  };

  // Context value object containing all authentication state and methods
  const contextValue = {
    // State
    user,
    isLoading,
    error,

    // Authentication methods
    login,
    signup,
    logout,

    // Utility methods
    clearError,
    refreshSession,

    // Helper methods
    isAuthenticated: () => !!user,
    getUserId: () => user?.id || null,
    getUserEmail: () => user?.email || null,
    getUserName: () => user?.name || null,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use authentication context
 * Provides access to authentication state and methods
 * @returns {Object} - Authentication context value
 * @throws {Error} - If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};