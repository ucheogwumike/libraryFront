import React, { useState } from "react";
import Scanner from "./components/Scanner";
// import OCR from "./components/OCR";
import PDFExport from "./components/PDFExport";

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">Document Scanner App</h1>
      
      <Scanner />
      
      {/* <OCR image={image} /> */}
      
     
    </div>
  );
};

export default App;
