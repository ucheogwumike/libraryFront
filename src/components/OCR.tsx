import React, { useState } from "react";
import Tesseract from "tesseract.js";
import PDFExport from "./PDFExport";


interface OCRProps {
  image: string | null;
}

const OCR: React.FC<OCRProps> = ({ image }) => {
  const [text, setText] = useState<string>("");

  const extractText = async () => {
    if (!image) return;
    
    const { data } = await Tesseract.recognize(image, "eng");
    setText(data.text);
  };

  return (
    <div className="mt-4">
      <button 
        onClick={extractText} 
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Extract Text
      </button>

      {text && <p className="mt-4 border p-4">{text}</p>}

      <PDFExport image={image} text={text} />
    </div>
  );
};

export default OCR;