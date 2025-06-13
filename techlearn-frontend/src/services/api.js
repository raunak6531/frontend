/**
 * API Service Layer
 * 
 * This file provides a centralized HTTP client for making API requests.
 * It includes request/response interceptors, error handling, and authentication token management.
 */

import axios from 'axios';
import { API_CONFIG, HTTP_STATUS, ERROR_MESSAGES, APP_CONFIG } from '../config/constants.js';

/**
 * Create axios instance with default configuration
 */
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.DEFAULT_HEADERS,
});

/**
 * Request interceptor to add authentication token to requests
 */
apiClient.interceptors.request.use(
  (config) => {
    // Get authentication token from localStorage
    const token = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.TOKEN);
    
    if (token) {
      // Add Bearer token to Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development mode
    if (API_CONFIG.IS_DEV) {
      console.log('🚀 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
      });
    }
    
    return config;
  },
  (error) => {
    // Log request error in development mode
    if (API_CONFIG.IS_DEV) {
      console.error('❌ Request Error:', error);
    }
    return Promise.reject(error);
  }
);

/**
 * Response interceptor to handle responses and errors globally
 */
apiClient.interceptors.response.use(
  (response) => {
    // Log successful response in development mode
    if (API_CONFIG.IS_DEV) {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }
    
    return response;
  },
  async (error) => {
    // Log error response in development mode
    if (API_CONFIG.IS_DEV) {
      console.error('❌ API Error:', {
        status: error.response?.status,
        url: error.config?.url,
        message: error.message,
        data: error.response?.data,
      });
    }
    
    // Handle specific error cases
    if (error.response) {
      const { status } = error.response;
      
      switch (status) {
        case HTTP_STATUS.UNAUTHORIZED:
          // Token expired or invalid - clear auth data and redirect to login
          localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.TOKEN);
          localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
          localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.USER);
          
          // Only redirect if not already on auth page
          if (!window.location.pathname.includes('/auth')) {
            window.location.href = '/auth';
          }
          break;
          
        case HTTP_STATUS.FORBIDDEN:
          // Access denied
          console.warn('Access denied to resource');
          break;
          
        case HTTP_STATUS.NOT_FOUND:
          // Resource not found
          console.warn('Requested resource not found');
          break;
          
        case HTTP_STATUS.INTERNAL_SERVER_ERROR:
          // Server error
          console.error('Internal server error');
          break;
      }
    }
    
    return Promise.reject(error);
  }
);

/**
 * Generic API request function
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} url - API endpoint URL
 * @param {Object} data - Request payload (for POST, PUT, PATCH)
 * @param {Object} config - Additional axios configuration
 * @returns {Promise} - Axios response promise
 */
export const apiRequest = async (method, url, data = null, config = {}) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      ...config,
    });
    
    return response.data;
  } catch (error) {
    // Transform error to a more user-friendly format
    throw transformError(error);
  }
};

/**
 * Transform axios error to application error format
 * @param {Error} error - Axios error object
 * @returns {Object} - Transformed error object
 */
const transformError = (error) => {
  // Network error (no response from server)
  if (!error.response) {
    return {
      message: ERROR_MESSAGES.NETWORK_ERROR,
      type: 'network',
      originalError: error,
    };
  }
  
  const { status, data } = error.response;
  
  // Server provided error message
  if (data && data.message) {
    return {
      message: data.message,
      type: 'server',
      status,
      details: data.details || null,
      originalError: error,
    };
  }
  
  // Default error messages based on status code
  let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG;
  
  switch (status) {
    case HTTP_STATUS.BAD_REQUEST:
      message = data?.error || 'Invalid request data';
      break;
    case HTTP_STATUS.UNAUTHORIZED:
      message = ERROR_MESSAGES.INVALID_CREDENTIALS;
      break;
    case HTTP_STATUS.FORBIDDEN:
      message = ERROR_MESSAGES.UNAUTHORIZED_ACCESS;
      break;
    case HTTP_STATUS.NOT_FOUND:
      message = 'Requested resource not found';
      break;
    case HTTP_STATUS.CONFLICT:
      message = data?.error || 'Resource conflict';
      break;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      message = ERROR_MESSAGES.SERVER_ERROR;
      break;
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
      message = 'Service temporarily unavailable';
      break;
  }
  
  return {
    message,
    type: 'http',
    status,
    originalError: error,
  };
};

/**
 * Convenience methods for common HTTP operations
 */
export const api = {
  // GET request
  get: (url, config = {}) => apiRequest('GET', url, null, config),
  
  // POST request
  post: (url, data, config = {}) => apiRequest('POST', url, data, config),
  
  // PUT request
  put: (url, data, config = {}) => apiRequest('PUT', url, data, config),
  
  // PATCH request
  patch: (url, data, config = {}) => apiRequest('PATCH', url, data, config),
  
  // DELETE request
  delete: (url, config = {}) => apiRequest('DELETE', url, null, config),
};

// Export the configured axios instance for advanced usage
export { apiClient };

// Default export
export default api;
