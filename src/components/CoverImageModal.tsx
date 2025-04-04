import { useState } from "react";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

const CoverImageModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Generate preview
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      onUpload(selectedImage);
      setSelectedImage(null);
      setPreviewUrl(null);
      onClose();
    }
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Upload an Image</h2>

        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

        {previewUrl && (
          <div className="mb-4">
            <img src={previewUrl} alt="Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            onClick={handleUpload}
            disabled={!selectedImage}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverImageModal;
