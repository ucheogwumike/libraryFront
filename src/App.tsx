import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Document from "./pages/Document";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import Author from "./pages/Author";
import Library from "./pages/Library";
import View from "./pages/View";
import Scan from "./pages/Scan";
import Ocr from "./pages/Ocr"
import Manager from "./pages/Manager";
import DashboardLibrary from "./pages/DashboardLibrary";
import DashboardManagement from "./pages/DashboardManagement";
import Scanner from "./components/Scanner";
// import OCR from "./components/OCR";
import PDFExport from "./components/PDFExport";

const App: React.FC = () => {
  const auth = useContext(AuthContext);
  
  return (
    
    <Router>
    
   <Routes>
      <Route path="/" element={auth?.user ? (<DashboardLibrary/>):(<Login/>)} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/public" element={<Dashboard />} />
      <Route path="/management" element={<DashboardManagement />} />
      <Route
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardLibrary />
          </ProtectedRoute>
        }
      />
      <Route path="/documents/:id" element={<Document />} />
      <Route path="/blogs/:id" element={<Blog />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="/authors/:id" element={<Author />} />
      <Route path="/library" element={<Library />} />
      <Route path="/view/uploads/:url" element={<View />} />
      <Route path="/scan" element={<Scan/>} />
      <Route path="/ocr" element={<Ocr/>} />
      <Route path="/manage" element={<Manager/>}/>
    </Routes>
  </Router>
  );
};

export default App;
