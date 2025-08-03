import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Mock registration function
  const register = async (userData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation
      if (!userData.email || !userData.password || !userData.name) {
        throw new Error('All fields are required');
      }
      
      if (userData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Store user data (in real app, this would be handled by backend)
      localStorage.setItem('registeredUser', JSON.stringify(userData));
      
      return { success: true, message: 'Registration successful!' };
    } catch (error) {
      throw error;
    }
  };

  // Mock login function
  const login = async (credentials) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get registered user from localStorage (mock database)
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
      
      if (credentials.email === registeredUser.email && 
          credentials.password === registeredUser.password) {
        setIsAuthenticated(true);
        setUser({ name: registeredUser.name, email: registeredUser.email });
        return { success: true, message: 'Login successful!' };
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
