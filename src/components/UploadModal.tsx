import React, { useState, useEffect } from "react";
import axios from "axios";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (name: string, category: string) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [docName, setDocName] = useState<string>("");

  // Fetch categories from API
  useEffect(() => {
    axios.get("http://localhost:3500/categories") // Replace with actual API
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    if (!docName || !selectedCategory) {
      alert("Please fill in all fields.");
      return;
    }
    onUpload(docName, selectedCategory);
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Upload PDF</h2>

        {/* Document Name Input */}
        <label className="block mb-2 text-sm font-medium">Document Name</label>
        <input
          type="text"
          value={docName}
          onChange={(e) => setDocName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter document name"
        />

        {/* Category Dropdown */}
        <label className="block mb-2 text-sm font-medium">Category</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default UploadModal;
