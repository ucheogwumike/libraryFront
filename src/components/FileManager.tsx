import React, { useState, useEffect } from "react";
import { FaUpload, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CoverImageModal from "./CoverImageModal";
import EditDocumentModal from "./EditDocumentModal";
import axios from "axios";

interface TableProps {
  data: { id: number; name: string; email: string }[];
  rowsPerPage?: number;
}

interface Document {
    id: string
    filename: string;
    type: string;
    createdAt: string;
    category:{ id: string | null; name: string };
    status: string;
    coverPage: string;
    url: string;
}

const FileManager: React.FC = () => {

 const navigate = useNavigate();
 const [isCoverModalOpen, setIsCoverModalOpen] = useState(false);
 const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
   const [documents, setDocuments] = useState<Document[]>([]);
   const [document, setDocument] = useState<Document>();
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [imageId, setImageId] = useState<string>('');
//   const [page,]

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(documents.length / 10);

  const startIndex = (currentPage - 1) * 10;
  console.log(documents)
//   const paginatedData = documents?.slice(startIndex, startIndex + 10);

    const findDocument = async (id: number)=> {
        axios.get(`${process.env.REACT_APP_API_URL}/files/one`, { params: {id} }) // Replace with actual API
    .then((response) => {
        console.log(response)
      setDocument(response.data);
    })
    .catch((error) => console.error("Error fetching categories:", error));

    }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file)
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      uploadPdf();
    } else {
      alert("Please select a valid PDF file.");
      setSelectedFile(null);
    }
  };

  const handleCardClick = (url: string) => {
    navigate(`/view${url}`);
  };

  const handleShowFilter = async () => {
    return setShowFilter(!showFilter);
  }

  const uploadPdf = async () => {
    if (!selectedFile) {
      alert("Please select a PDF file before uploading.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);


    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/files`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("PDF uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };


  const handleUpload = async (file: File,) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", imageId);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/files`, formData, {
        params: { cover: true },
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!response.data) {
        throw new Error("Upload failed");
      }

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  const handleEdit = async (document: Document,) => {
    console.log(document)
    const formData = new FormData();
    formData.append("filename", document.filename);
    formData.append("status", document.status);
    formData.append("type", document.type);
    if (document?.category?.id) {
      formData.append("category", document.category.id);
    }
    formData.append("id", document.id);

    console.log(formData)

    try {
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/files`, document);

      if (!response.data) {
        throw new Error("Update failed");
      }

      alert("Document updated successfully!");
    } catch (error) {
      console.error("Error updating documents:", error);
      alert("Failed to upload Document");
    }
  };

  

   useEffect( () => {

    axios.get(`${process.env.REACT_APP_API_URL}/files`, { params: { page: currentPage } }) // Replace with actual API
    .then((response) => {
      setDocuments(response.data.data);
    })
    .catch((error) => console.error("Error fetching categories:", error));

    

        axios.get(`${process.env.REACT_APP_API_URL}/categories`) // Replace with actual API
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    

   
    
   

  

  // Handle file selection
  

  // Handle row selection
  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md mt-5">
      {/* Search Bar & Filters */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search for document"
          className="w-full p-2 border rounded-md"
        />
        <button className="border px-4 py-2 rounded-md bg-green-900 text-white" >Search </button>
        <button className="border px-4 py-2 rounded-md" onClick={handleShowFilter}>Filters <FaFilter/> </button>
       
      </div>

      {/* Dropdown Filters */}
      <div className="grid grid-cols-5 gap-4 mb-4" style={{display:`${!showFilter ? 'none':'grid'}`}}>
        
        <select  className="border p-2 rounded-md"
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
        <select className="border p-2 rounded-md">
        <option value="">Select a Document Type</option>
        <option value="document">Document</option>
        <option value="book">Book</option>
        <option value="others">Others</option>
        </select>
        {/* <select className="border p-2 rounded-md">
          <option>Document Date</option>
        </select>
        <select className="border p-2 rounded-md">
          <option>Staff</option>
        </select> */}
        <select className="border p-2 rounded-md">
          <option value="">Select Status</option>
          <option value="uploaded">Uploaded</option>
        <option value="published">Published</option>
        <option value="recalled">Recalled</option>
        </select>

        <button className="border p-2 rounded-md bg-green-900 text-white" > Manage Categories </button>
      </div>

      {/* Drag & Drop Upload */}
      <div className="border-2 border-dashed p-10 text-center rounded-md mb-4">
        <FaUpload size={22}className="m-auto"/>
        <input type="file" multiple onChange={handleFileChange} className="hidden" id="fileUpload" />
        <label htmlFor="fileUpload" className="cursor-pointer text-blue-500">Click to browse</label><br />
        Or <br />
        <p>Drop your documents here</p>
      </div>

      {/* Table */}
      <table className="w-full border-pink border-collapse border rounded-md shadow-md">
        <thead className="border rounded-md">
          <tr className="border rounded-md bg-green-900">
            
            <th className="text-white border p-2">Name</th>
            <th className="text-white border p-2">Type</th>
            <th className="text-white border p-2">Date</th>
            <th className="text-white border p-2">Cover Image</th>
            <th className="text-white border p-2">Category</th>
            <th className="text-white border p-2">Status</th>
            <th className="text-white border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc?.id} className={`hover:bg-green-100 ${!doc?.filename ?"bg-red-700":""} ${!doc?.category ?"bg-red-700":""}`}>
              
              <td className="border p-2 text-blue-500">{doc?.filename}</td>
              <td className="border p-2 text-blue-500">{doc?.type}</td>
              <td className="border p-2">{doc?.createdAt.split('z')[0]}</td>
              <td className="border p-2">{doc?.coverPage ? `${process.env.REACT_APP_API_URL}${doc?.coverPage}`:''}</td>
              <td className="border p-2">{doc?.category?.name}</td>
              <td className="border p-2 text-green-500">{doc?.status}</td>
              <td className="border p-2 flex justify-evenly space-x-2">
                <button className="text-blue-500" onClick={() => handleCardClick(doc?.url)}>📄</button>
                <button className="text-green-500" onClick={() => { findDocument(Number(doc?.id)); setIsEditModalOpen(true);}}>✏️</button>
                <button className="text-green-500" onClick={() => {setIsCoverModalOpen(true); setImageId(doc?.id) }}>📸</button>
                <button className="text-red-500">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-white flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-green-900 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="text-white px-4 py-2 bg-green-900 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {document && (
        <EditDocumentModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEdit={handleEdit}
          document={{ ...document, category: { ...document.category, id: document?.category?.id || "" } }}
        />
      )}
      
      <CoverImageModal isOpen={isCoverModalOpen} onClose={() => setIsCoverModalOpen(false)} onUpload={handleUpload} />
    </div>
  );
};

export default FileManager;
