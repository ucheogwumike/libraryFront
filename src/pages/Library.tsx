import React from "react";
import { useParams } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import LibraryList from "../components/Library";
const Library: React.FC = () => {
  const { id } = useParams(); // Get the card ID from the URL

  return (
    <div className="flex flex-row">
    <SideMenu />
       
    <LibraryList/>

    </div>
  );
};

export default Library;
