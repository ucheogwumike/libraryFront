import React from "react";

const books = [
  {
    id: 1,
    title: "The Example of Shakespeare and Other Essays",
    category: "African, Educative book, Literature",
    price: "₦5,500",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    id: 2,
    title: "Criminal Code",
    category: "Crime, Law",
    price: "₦7,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Sọ̀rọ̀sóke: An #EndSARS Anthology",
    category: "Poetry, Protest",
    price: "₦7,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Kaduna Language Class",
    category: "Culture, Language Books, Women",
    price: "₦4,500",
    image: "https://via.placeholder.com/150",
  },
];

const Library: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Sort & Show Options */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <select className="p-2 border rounded-md">
            <option>Sort by popularity</option>
            <option>Sort by price</option>
          </select>
          <select className="ml-4 p-2 border rounded-md">
            <option>Show 16</option>
            <option>Show 32</option>
          </select>
        </div>
        <div className="text-gray-500">1 of 19</div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
          >
            <p className="text-gray-500 text-sm">{book.category}</p>
            <h2 className="font-bold">{book.title}</h2>
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md my-2"
            />
            <p className="text-lg font-bold">{book.price}</p>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4">
              <button className="bg-green-500 text-white p-2 rounded-full">
                🛒
              </button>
              <div className="text-blue-500 text-sm flex space-x-4">
                <button className="hover:underline">⭐ Add to Wishlist</button>
                <button className="hover:underline">🔍 Compare</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
