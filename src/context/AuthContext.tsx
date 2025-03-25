import React, { createContext, useState, ReactNode } from "react";

// Define the AuthContext Type
interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

// Create the Context with default values
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider Component to wrap the app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const login = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username); // Persist login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear session
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
