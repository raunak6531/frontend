/**
 * Authentication Service
 * 
 * This service handles all authentication-related API calls including
 * login, signup, logout, token refresh, and user profile management.
 */

import { api } from './api.js';
import { AUTH_ENDPOINTS, APP_CONFIG, VALIDATION_RULES, ERROR_MESSAGES } from '../config/constants.js';

/**
 * Authentication Service Class
 * Provides methods for user authentication and session management
 */
class AuthService {
  /**
   * User login
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @returns {Promise<Object>} - User data and authentication token
   */
  async login(email, password) {
    // Validate input parameters
    this.validateEmail(email);
    this.validatePassword(password);
    
    try {
      // Make login API request
      const response = await api.post(AUTH_ENDPOINTS.LOGIN, {
        email: email.toLowerCase().trim(),
        password,
      });
      
      // Extract user data and tokens from response
      const { user, token, refreshToken } = response;
      
      // Store authentication data in localStorage
      this.storeAuthData(user, token, refreshToken);
      
      return {
        user,
        token,
        success: true,
      };
    } catch (error) {
      // Handle login-specific errors
      if (error.status === 401) {
        throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
      }
      
      // Re-throw other errors
      throw error;
    }
  }
  
  /**
   * User registration/signup
   * @param {Object} userData - User registration data
   * @param {string} userData.email - User's email address
   * @param {string} userData.password - User's password
   * @param {string} userData.name - User's full name
   * @param {string} userData.mobile - User's mobile number (optional)
   * @param {string} userData.gender - User's gender (optional)
   * @param {string} userData.github - User's GitHub username (optional)
   * @returns {Promise<Object>} - User data and authentication token
   */
  async signup(userData) {
    const { email, password, name, mobile, gender, github } = userData;
    
    // Validate required fields
    this.validateEmail(email);
    this.validatePassword(password);
    this.validateName(name);
    
    // Validate optional fields if provided
    if (mobile) this.validateMobile(mobile);
    if (github) this.validateGitHub(github);
    
    try {
      // Prepare signup data
      const signupData = {
        email: email.toLowerCase().trim(),
        password,
        name: name.trim(),
        ...(mobile && { mobile: mobile.trim() }),
        ...(gender && { gender }),
        ...(github && { github: github.toLowerCase().trim() }),
      };
      
      // Make signup API request
      const response = await api.post(AUTH_ENDPOINTS.SIGNUP, signupData);
      
      // Extract user data and tokens from response
      const { user, token, refreshToken } = response;
      
      // Store authentication data in localStorage
      this.storeAuthData(user, token, refreshToken);
      
      return {
        user,
        token,
        success: true,
      };
    } catch (error) {
      // Handle signup-specific errors
      if (error.status === 409) {
        throw new Error(ERROR_MESSAGES.USER_EXISTS);
      }
      
      // Re-throw other errors
      throw error;
    }
  }
  
  /**
   * User logout
   * Clears local authentication data and notifies server
   * @returns {Promise<void>}
   */
  async logout() {
    try {
      // Get current token
      const token = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.TOKEN);
      
      if (token) {
        // Notify server about logout (optional - server can handle token expiration)
        await api.post(AUTH_ENDPOINTS.LOGOUT);
      }
    } catch (error) {
      // Log error but don't prevent logout
      console.warn('Logout API call failed:', error.message);
    } finally {
      // Always clear local authentication data
      this.clearAuthData();
    }
  }
  
  /**
   * Refresh authentication token
   * @returns {Promise<Object>} - New token data
   */
  async refreshToken() {
    const refreshToken = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    
    try {
      const response = await api.post(AUTH_ENDPOINTS.REFRESH, {
        refreshToken,
      });
      
      const { token, refreshToken: newRefreshToken } = response;
      
      // Update stored tokens
      localStorage.setItem(APP_CONFIG.STORAGE_KEYS.TOKEN, token);
      if (newRefreshToken) {
        localStorage.setItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN, newRefreshToken);
      }
      
      return { token, refreshToken: newRefreshToken };
    } catch (error) {
      // Clear auth data if refresh fails
      this.clearAuthData();
      throw error;
    }
  }
  
  /**
   * Get current user profile
   * @returns {Promise<Object>} - User profile data
   */
  async getProfile() {
    try {
      const response = await api.get(AUTH_ENDPOINTS.PROFILE);
      return response.user;
    } catch (error) {
      throw error;
    }
  }
  
  /**
   * Check if user is currently authenticated
   * @returns {boolean} - Authentication status
   */
  isAuthenticated() {
    const token = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.TOKEN);
    const user = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.USER);
    
    return !!(token && user);
  }
  
  /**
   * Get current user data from localStorage
   * @returns {Object|null} - User data or null if not authenticated
   */
  getCurrentUser() {
    try {
      const userData = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.USER);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      this.clearAuthData();
      return null;
    }
  }
  
  /**
   * Store authentication data in localStorage
   * @param {Object} user - User data
   * @param {string} token - Authentication token
   * @param {string} refreshToken - Refresh token
   */
  storeAuthData(user, token, refreshToken) {
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.USER, JSON.stringify(user));
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.TOKEN, token);
    
    if (refreshToken) {
      localStorage.setItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    }
  }
  
  /**
   * Clear all authentication data from localStorage
   */
  clearAuthData() {
    localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.USER);
    localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.TOKEN);
    localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
  }
  
  // Validation methods
  
  /**
   * Validate email address
   * @param {string} email - Email to validate
   * @throws {Error} - If email is invalid
   */
  validateEmail(email) {
    if (!email || !email.trim()) {
      throw new Error('Email is required');
    }
    
    if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) {
      throw new Error(ERROR_MESSAGES.INVALID_EMAIL);
    }
  }
  
  /**
   * Validate password
   * @param {string} password - Password to validate
   * @throws {Error} - If password is invalid
   */
  validatePassword(password) {
    if (!password) {
      throw new Error('Password is required');
    }
    
    if (password.length < VALIDATION_RULES.MIN_PASSWORD_LENGTH) {
      throw new Error(ERROR_MESSAGES.WEAK_PASSWORD);
    }
  }
  
  /**
   * Validate name
   * @param {string} name - Name to validate
   * @throws {Error} - If name is invalid
   */
  validateName(name) {
    if (!name || !name.trim()) {
      throw new Error('Name is required');
    }
    
    if (name.trim().length < VALIDATION_RULES.MIN_NAME_LENGTH) {
      throw new Error('Name must be at least 2 characters long');
    }
    
    if (name.trim().length > VALIDATION_RULES.MAX_NAME_LENGTH) {
      throw new Error('Name must be less than 50 characters long');
    }
  }
  
  /**
   * Validate mobile number
   * @param {string} mobile - Mobile number to validate
   * @throws {Error} - If mobile number is invalid
   */
  validateMobile(mobile) {
    if (mobile && !VALIDATION_RULES.PHONE_REGEX.test(mobile)) {
      throw new Error(ERROR_MESSAGES.INVALID_PHONE);
    }
  }
  
  /**
   * Validate GitHub username
   * @param {string} github - GitHub username to validate
   * @throws {Error} - If GitHub username is invalid
   */
  validateGitHub(github) {
    if (github && !VALIDATION_RULES.GITHUB_REGEX.test(github)) {
      throw new Error('Invalid GitHub username format');
    }
  }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;
