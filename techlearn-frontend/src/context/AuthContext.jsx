import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('techlearn_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('techlearn_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('techlearn_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('techlearn_user');
    }
  }, [user]);

  const login = (email, password) => {
    // Mock login - in a real app, this would make an API call
    const userData = {
      id: '1',
      email,
      name: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    };
    setUser(userData);
  };

  const signup = (email, password, name) => {
    // Mock signup - in a real app, this would make an API call
    const userData = {
      id: '1',
      email,
      name,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`,
    };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 