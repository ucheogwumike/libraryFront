import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo-resize.png";

const CardList = (props:{title:string}) => {
    const navigate = useNavigate();
  // Sample card data with images
  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card.", image: logo },
    { id: 2, title: "Card 2", description: "This is the second card.", image: logo },
    { id: 3, title: "Card 3", description: "This is the third card.", image: logo },
    { id: 4, title: "Card 4", description: "This is the fourth card.", image: logo },
    // { id: 5, title: "Card 5", description: "This is the fifth card.", image: "https://via.placeholder.com/150" },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/${props.title.toLowerCase()}/${id}`);
  };

  return (
    <div className="flex flex-col items-center w-full mt-6 ml-3 p-6 border border-gray-200 rounded-lg shadow-lg">
      {/* Cards Container */}
        <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-4">{props.title}</h1>
      <div className="flex flex-wrap justify-center gap-4 w-full ">
        {cards.map((card) => (
          <div
          key={card.id}
          onClick={() => handleCardClick(card.id)}
            className="w-1/5 min-w-[180px] bg-white shadow-lg p-4 rounded-lg text-center border border-gray-200"
          >
            <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-6 px-6 py-2 bg-green-900 text-white font-semibold rounded-md hover:bg-green-700 transition">
        View More
      </button>
    </div>
  );
};

export default CardList;
