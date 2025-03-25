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
import Scanner from "./components/Scanner";
// import OCR from "./components/OCR";
import PDFExport from "./components/PDFExport";

const App: React.FC = () => {
  const auth = useContext(AuthContext);
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

  return (
    
    <Router>
    
   <Routes>
      <Route path="/" element={auth?.user ? (<Dashboard/>):(<Login/>)} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/documents/:id" element={<Document />} />
      <Route path="/blogs/:id" element={<Blog />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="/authors/:id" element={<Author />} />
      <Route path="/library" element={<Library />} />
      <Route path="/view/:url" element={<View />} />
      <Route path="/scan" element={<Scan/>} />
      <Route path="/ocr" element={<Ocr/>} />
    </Routes>
  </Router>
  );
};

export default App;
