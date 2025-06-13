/**
 * Error Handling Utilities
 * 
 * This module provides centralized error handling utilities for the application.
 * It includes functions for displaying user-friendly error messages and logging errors.
 */

import { ERROR_MESSAGES } from '../config/constants.js';

/**
 * Error Handler Class
 * Provides methods for handling different types of errors in the application
 */
class ErrorHandler {
  /**
   * Handle authentication errors
   * @param {Error} error - The error object
   * @returns {string} - User-friendly error message
   */
  handleAuthError(error) {
    // If error has a custom message, use it
    if (error.message) {
      return error.message;
    }
    
    // Handle different types of authentication errors
    switch (error.type) {
      case 'network':
        return ERROR_MESSAGES.NETWORK_ERROR;
      case 'server':
        return error.message || ERROR_MESSAGES.SERVER_ERROR;
      case 'validation':
        return error.message || 'Please check your input and try again.';
      default:
        return ERROR_MESSAGES.SOMETHING_WENT_WRONG;
    }
  }
  
  /**
   * Handle API errors
   * @param {Error} error - The error object
   * @returns {string} - User-friendly error message
   */
  handleApiError(error) {
    // Network errors
    if (!error.response) {
      return ERROR_MESSAGES.NETWORK_ERROR;
    }
    
    const { status, data } = error.response;
    
    // Server provided error message
    if (data && data.message) {
      return data.message;
    }
    
    // Default messages based on status code
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return ERROR_MESSAGES.INVALID_CREDENTIALS;
      case 403:
        return ERROR_MESSAGES.UNAUTHORIZED_ACCESS;
      case 404:
        return 'The requested resource was not found.';
      case 409:
        return 'A conflict occurred. The resource may already exist.';
      case 422:
        return 'Validation failed. Please check your input.';
      case 429:
        return 'Too many requests. Please try again later.';
      case 500:
        return ERROR_MESSAGES.SERVER_ERROR;
      case 503:
        return 'Service temporarily unavailable. Please try again later.';
      default:
        return ERROR_MESSAGES.SOMETHING_WENT_WRONG;
    }
  }
  
  /**
   * Handle form validation errors
   * @param {Object} errors - Validation errors object
   * @returns {Object} - Formatted error messages
   */
  handleValidationErrors(errors) {
    const formattedErrors = {};
    
    Object.keys(errors).forEach(field => {
      const error = errors[field];
      
      if (Array.isArray(error)) {
        // Multiple errors for a field
        formattedErrors[field] = error[0]; // Take the first error
      } else if (typeof error === 'string') {
        formattedErrors[field] = error;
      } else if (error && error.message) {
        formattedErrors[field] = error.message;
      } else {
        formattedErrors[field] = ERROR_MESSAGES.REQUIRED_FIELD;
      }
    });
    
    return formattedErrors;
  }
  
  /**
   * Log error for debugging purposes
   * @param {Error} error - The error object
   * @param {string} context - Context where the error occurred
   */
  logError(error, context = 'Unknown') {
    // Only log in development mode
    if (import.meta.env.DEV) {
      console.group(`🚨 Error in ${context}`);
      console.error('Error:', error);
      console.error('Stack:', error.stack);
      console.error('Context:', context);
      console.groupEnd();
    }
    
    // In production, you might want to send errors to a logging service
    // Example: sendToLoggingService(error, context);
  }
  
  /**
   * Display error message to user
   * @param {string} message - Error message to display
   * @param {string} type - Type of error ('error', 'warning', 'info')
   */
  showError(message, type = 'error') {
    // For now, we'll use console.error
    // In a real application, you might want to use a toast notification library
    console.error(`${type.toUpperCase()}: ${message}`);
    
    // You can integrate with toast libraries like react-hot-toast, react-toastify, etc.
    // Example:
    // toast.error(message);
  }
  
  /**
   * Check if error is a network error
   * @param {Error} error - The error object
   * @returns {boolean} - True if it's a network error
   */
  isNetworkError(error) {
    return !error.response || error.code === 'NETWORK_ERROR';
  }
  
  /**
   * Check if error is an authentication error
   * @param {Error} error - The error object
   * @returns {boolean} - True if it's an authentication error
   */
  isAuthError(error) {
    return error.response && (error.response.status === 401 || error.response.status === 403);
  }
  
  /**
   * Check if error is a validation error
   * @param {Error} error - The error object
   * @returns {boolean} - True if it's a validation error
   */
  isValidationError(error) {
    return error.response && (error.response.status === 400 || error.response.status === 422);
  }
  
  /**
   * Get user-friendly error message from any error
   * @param {Error} error - The error object
   * @param {string} fallback - Fallback message if no specific message found
   * @returns {string} - User-friendly error message
   */
  getErrorMessage(error, fallback = ERROR_MESSAGES.SOMETHING_WENT_WRONG) {
    // If error is a string, return it directly
    if (typeof error === 'string') {
      return error;
    }
    
    // If error has a message property, use it
    if (error && error.message) {
      return error.message;
    }
    
    // If it's an API error, handle it appropriately
    if (error && error.response) {
      return this.handleApiError(error);
    }
    
    // Return fallback message
    return fallback;
  }
}

// Create and export a singleton instance
const errorHandler = new ErrorHandler();

// Export individual methods for convenience
export const {
  handleAuthError,
  handleApiError,
  handleValidationErrors,
  logError,
  showError,
  isNetworkError,
  isAuthError,
  isValidationError,
  getErrorMessage,
} = errorHandler;

// Export the class instance as default
export default errorHandler;
