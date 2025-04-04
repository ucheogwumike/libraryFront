import React, { useState, useEffect } from "react";
import axios from "axios";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  document:{id: string
    filename: string;
    type: string;
    createdAt: string;
    category:{ id: string; name: string };
    status: string;
    coverPage: string;
    url: string
    ;}
  onEdit: (document:{id: string
    filename: string;
    type: string;
    createdAt: string;
    category:{ id: string|null; name: string };
    status: string;
    coverPage: string;
    url: string;
}) => void;
}

const EditDocumentModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onEdit,document
  }) => {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [selectedType, setSelectedType] = useState<string>(document.type);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(document?.category?.id);
  const [selectedStatus, setSelectedStatus] = useState<string>(document.status);
  const [docName, setDocName] = useState<string>(document.filename);

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
    // if (!docName || !selectedCategory) {
    //   alert("Please fill in all fields.");
    //   return;
    // }
    onEdit({
      category: categories.find((cat) => cat.id === selectedCategory) || { id: selectedCategory, name: "" },
      filename: docName,
      type: selectedType,
      status: selectedStatus,
      id: document.id,
      createdAt: document.createdAt,
      coverPage: document.coverPage,
      url: document.url,
    });
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Document</h2>

        {/* Document Name Input */}
        <label className="block mb-2 text-sm font-medium">Document Name</label>
        <input
          type="text"
        //   defaultValue={filename}
          value={docName}
          onChange={(e) => setDocName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter document name"
        />

        {/* Category Dropdown */}
        <label className="block mb-2 text-sm font-medium">Category</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {/* <option value="">Select a category</option> */}
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <label className="block mb-2 text-sm font-medium">Status</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
           <option value="uploaded">Uploaded</option>
        <option value="published">Published</option>
        <option value="recalled">Recalled</option>
        </select>


        <label className="block mb-2 text-sm font-medium">Type</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="document">Document</option>
        <option value="book">Book</option>
        <option value="others">Others</option>
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

export default EditDocumentModal;
