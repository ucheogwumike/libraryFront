import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PDFViewer: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setPdfFile(fileUrl);
      setPageNumber(1);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">PDF Viewer</h2>

      {/* Upload File Input */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded bg-white shadow-md"
      />

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
  );
};

export default PDFViewer;
