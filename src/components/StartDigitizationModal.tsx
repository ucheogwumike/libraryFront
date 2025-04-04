import React, { useState } from 'react';

const StartDigitizationModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOcrEnabled, setIsOcrEnabled] = useState(false);
  const [category, setCategory] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleStartDigitization = () => {
    // Handle the digitization logic here
    console.log('Starting digitization with:', { selectedFile, isOcrEnabled, category });
    onClose(); // Close the modal after submission (optional)
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const clearCategory = () => {
    setCategory('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Start Digitization</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Upload Document Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload Document</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="file"
              id="file-upload"
              accept=".pdf,.xls,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-gray-200 text-gray-700 cursor-pointer"
            >
              Choose File
            </label>
            <span className="flex-1 px-4 py-2 text-gray-500 truncate">
              {selectedFile ? selectedFile.name : 'PDF, XLS, DOCX files'}
            </span>
          </div>
        </div>

        {/* Scan Document Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Scan Document</label>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-between"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <span className="text-gray-500">Drag and drop</span>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
              Choose
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">PDF, XLS, DOCX files</p>
        </div>

        {/* Enable OCR Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Enable OCR</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="ocr-auto-enhance"
              checked={isOcrEnabled}
              onChange={(e) => setIsOcrEnabled(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="ocr-auto-enhance" className="text-gray-700">
              Auto-enhance
            </label>
          </div>
        </div>

        {/* Document Category Section */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Document Category (optional)</label>
          <div className="relative">
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="legal">Legal</option>
              <option value="financial">Financial</option>
              <option value="administrative">Administrative</option>
              <option value="public-records">Public Records</option>
            </select>
            {category && (
              <button
                onClick={clearCategory}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleStartDigitization}
            className="w-full mr-2 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Start Digitization
          </button>
          <button
            onClick={onClose}
            className="w-full ml-2 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartDigitizationModal;