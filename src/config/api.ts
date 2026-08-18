import axios from 'axios';
import type { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://scoldsjobforea.onrender.com';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: Add Authorization header with DASHBOARD_API_KEY
apiClient.interceptors.request.use((config) => {
  const dashboardApiKey = import.meta.env.VITE_DASHBOARD_API_KEY;
  
  if (dashboardApiKey) {
    config.headers.Authorization = `Bearer ${dashboardApiKey}`;
  }
  
  return config;
});

// Response interceptor: Enhanced error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle authentication errors
    if (error.response?.status === 401) {
      const dashboardApiKey = import.meta.env.VITE_DASHBOARD_API_KEY;
      if (!dashboardApiKey) {
        console.warn('API: VITE_DASHBOARD_API_KEY environment variable is not set');
      } else {
        console.warn('API: Invalid VITE_DASHBOARD_API_KEY - authentication failed');
      }
    }
    
    // Log server errors (5xx)
    if (error.response?.status && error.response.status >= 500) {
      console.error(`API Error [${error.response.status}]:`, error.response.data?.message || error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
export { API_URL };
