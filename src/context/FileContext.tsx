import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";


// Define the AuthContext Type
interface FileContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  upload: (file: any) => any;
}

// Create the Context with default values
export const FileContext = createContext<FileContextType | undefined>(undefined);

// AuthProvider Component to wrap the app
export const FileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const login = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username); // Persist login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear session
  };

  const upload = async (file:any) =>{
    try {

        const response =  await axios.post(`${process.env.REACT_APP_API_URL}/files`, file, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        
    } catch (error) {
        
    }
   

  } 

  return (
    <FileContext.Provider value={{ user, login, logout, upload }}>
      {children}
    </FileContext.Provider>
  );
};
