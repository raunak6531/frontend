/**
 * Application Constants and Configuration
 * 
 * This file contains all the configuration constants used throughout the application.
 * It centralizes API endpoints, application settings, and other configuration values.
 */

// API Configuration
export const API_CONFIG = {
  // Base URL for all API calls - loaded from environment variables
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  
  // Request timeout in milliseconds (30 seconds)
  TIMEOUT: 30000,
  
  // Default headers for API requests
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

// Authentication API Endpoints
export const AUTH_ENDPOINTS = {
  // User login endpoint
  LOGIN: import.meta.env.VITE_AUTH_LOGIN_ENDPOINT || '/auth/login',
  
  // User registration endpoint
  SIGNUP: import.meta.env.VITE_AUTH_SIGNUP_ENDPOINT || '/auth/signup',
  
  // User logout endpoint
  LOGOUT: import.meta.env.VITE_AUTH_LOGOUT_ENDPOINT || '/auth/logout',
  
  // Token refresh endpoint
  REFRESH: import.meta.env.VITE_AUTH_REFRESH_ENDPOINT || '/auth/refresh',
  
  // User profile endpoint
  PROFILE: '/auth/profile',
  
  // Password reset endpoints
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
};

// Application Configuration
export const APP_CONFIG = {
  // Application name
  NAME: import.meta.env.VITE_APP_NAME || 'TechLearn',
  
  // Application version
  VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  
  // Development mode flag
  IS_DEV: import.meta.env.VITE_DEV_MODE === 'true' || import.meta.env.DEV,
  
  // Local storage keys
  STORAGE_KEYS: {
    USER: 'techlearn_user',
    TOKEN: 'techlearn_token',
    REFRESH_TOKEN: 'techlearn_refresh_token',
  },
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// Error Messages
export const ERROR_MESSAGES = {
  // Network errors
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  TIMEOUT_ERROR: 'Request timeout. Please try again.',
  
  // Authentication errors
  INVALID_CREDENTIALS: 'Invalid email or password.',
  USER_EXISTS: 'User with this email already exists.',
  WEAK_PASSWORD: 'Password must be at least 8 characters long.',
  PASSWORDS_DONT_MATCH: 'Passwords do not match.',
  
  // Validation errors
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PHONE: 'Please enter a valid phone number.',
  
  // Generic errors
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
  UNAUTHORIZED_ACCESS: 'You are not authorized to access this resource.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful! Welcome back.',
  SIGNUP_SUCCESS: 'Account created successfully! Welcome to TechLearn.',
  LOGOUT_SUCCESS: 'You have been logged out successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_CHANGED: 'Password changed successfully.',
};

// Validation Rules
export const VALIDATION_RULES = {
  // Email validation regex
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Password validation (minimum 8 characters, at least one letter and one number)
  PASSWORD_REGEX: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
  
  // Phone number validation (basic format)
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  
  // GitHub username validation
  GITHUB_REGEX: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
  
  // Minimum lengths
  MIN_PASSWORD_LENGTH: 8,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
};

// Default export for easy importing
export default {
  API_CONFIG,
  AUTH_ENDPOINTS,
  APP_CONFIG,
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  VALIDATION_RULES,
};
