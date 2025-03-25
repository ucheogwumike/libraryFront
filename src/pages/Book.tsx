import React from "react";
import { useParams } from "react-router-dom";
import SideMenu from "../components/SideMenu";

const Book: React.FC = () => {
  const { id } = useParams(); // Get the card ID from the URL

  return (
    <div className="flex flex-row">
    <SideMenu />
        <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Card Details</h1>
      <p className="text-lg">You selected Card ID: {id}</p>
    </div>

 </div>
  );
};

export default Book;
