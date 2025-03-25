import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import doc from "../assets/MY-NIGERIA-EARLY-HISTORY-870x870-1.jpg"
// import file from "../assets/Atelier-A2.pdf";

interface Comment {
    id: number;
    user: string;
    text: string;
    date: string;
    url?: string;
  }
  
  

const Document: React.FC = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);


    const handleCardClick = (url: string) => {
        navigate(`/view${url}`);
      };

    const product = {
      title: "MY NIGERIA: EARLY HISTORY",
      category: "History",
      price: "₦1,700",
      description:
        "This book takes everyone – young and old – on a voyage back into the history of the remarkable and wonderful people called Nigerians. With illustrations, facts, and anecdotes about Nigerian ancestors, the history of the country is depicted as never before seen.",
      image: doc, // Replace with actual image URL
      author: "Constance Omawumi Kola-Lawal",
      illustrator: "Sandy Lightley",
      url:"/Atelier-A2.pdf"
    };

  // Sample comments data
  const allComments: Comment[] = [
    { id: 1, user: "Alice", text: "Great product!", date: "2025-03-10" },
    { id: 2, user: "Bob", text: "I love this!", date: "2025-03-12" },
    { id: 3, user: "Charlie", text: "Where can I buy this?", date: "2025-03-15" },
    { id: 4, user: "Dave", text: "Nice quality.", date: "2025-03-16" },
    { id: 5, user: "Eve", text: "Highly recommended!", date: "2025-03-18" },
    { id: 6, user: "Frank", text: "Looks amazing!", date: "2025-03-19" },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = allComments.slice(indexOfFirstComment, indexOfLastComment);
  const totalPages = Math.ceil(allComments.length / commentsPerPage);

  return (
    <div className="flex">
    <SideMenu />
    <div className="max-w-4xl mx-auto p-6">
      {/* Product Display */}
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md" />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-gray-600 text-sm uppercase">{product.category}</h2>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          
          {/* Wishlist & Compare */}
          <div className="flex space-x-4 text-gray-500">
            <button className="hover:text-gray-800" onClick={() => handleCardClick(product.url)}> read</button>
            <button className="hover:text-gray-800"> download</button>
          </div>

          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-bold">{product.price}</p>

          {/* Quantity Selector & Order Button */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-16 p-2 border rounded-md"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-md">
              🛒 Order
            </button>
          </div>

          {/* Wishlist Link */}
          <div className="text-blue-500 hover:text-blue-600 cursor-pointer">
            ⭐ Add to Wishlist
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Comments</h3>

        {/* Display Comments */}
        {currentComments.map((comment) => (
          <div key={comment.id} className="mb-4 p-3 bg-white rounded-md shadow">
            <p className="font-semibold">{comment.user}</p>
            <p className="text-gray-700">{comment.text}</p>
            <p className="text-xs text-gray-400">{comment.date}</p>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Previous
          </button>
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Next
          </button>
        </div>

        {/* Comment Form */}
        <form className="mt-4">
          <textarea
            placeholder="Write a comment..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Document;
