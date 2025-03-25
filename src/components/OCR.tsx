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
    <div className="flex flex-col w-full mt-4 bg-green-500 h-75">
      <button 
        onClick={extractText} 
        className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-md m-auto"
      >
        Extract Text
      </button>

      {text && <textarea className="w-full h-96 mt-4 border p-4" defaultValue={text}></textarea>}

      {/* <PDFExport image={image} text={text} /> */}
      <button className="w-1/4 bg-red-500 text-white px-4 py-2 rounded-md m-auto mb-5">
            {"Upload PDF"}
          </button>
    </div>
  );
};

export default OCR;