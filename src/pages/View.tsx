import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import SideMenu from "../components/SideMenu";
import { useParams } from "react-router-dom";
// import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import workerSrc from "pdfjs-dist/build/pdf.worker.entry";


// Fix: Use the locally installed worker
//import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
//pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc =`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer: React.FC = () => {
    const url = useParams();
  const [pdfFile, setPdfFile] = useState<string | null>(null);//(`http://localhost:3500/uploads/1742901766307-122498855.pdf`);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

//   setPdfFile(`${process.env.REACT_APP_API_URL}/uploads/${url}`)


  useEffect(() => {
    setPdfFile(`${process.env.REACT_APP_API_URL}/uploads/${url.url}`)
    }, []);
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       const fileUrl = URL.createObjectURL(file);
//       console.log(fileUrl);
//       setPdfFile(fileUrl);
//       setPageNumber(1);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

  return (
    <div className="flex">
    <SideMenu />
    
    <div className="flex flex-col items-center p-4 bg-gray-100 w-full min-h-screen">
    <h2 className="bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition w-full mb-3 text-center" >View Document</h2> 


      {/* Upload File Input */}
      {/* <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded bg-white shadow-md"
      /> */}

      {/* PDF Display */}
      {pdfFile ? (
        <div className="border shadow-md p-2 bg-white w-full max-w-3xl">
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </div>
      ) : (
        <p className="text-gray-500">Upload a PDF to view it here.</p>
      )}

      {/* Controls */}
      {pdfFile && (
        <>
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              disabled={pageNumber <= 1}
            >
              Previous
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              disabled={pageNumber >= (numPages || 1)}
            >
              Next
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => setScale((prev) => Math.min(prev + 0.2, 2))}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Zoom In
            </button>
            <button
              onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Zoom Out
            </button>
          </div>
        </>
      )}
    </div>
    </div>   
    
  );
};

export default PDFViewer;
