import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SideMenu from "../components/SideMenu";
import ImageSlider from "../components/ImageSlider";
import CardList from "../components/CardList";

const Dashboard: React.FC = () => {
    
  const auth = useContext(AuthContext);
  return(
    <div className="flex">
        <SideMenu />

        <div className="w-full mt-6">
        <ImageSlider/>

        {/* <h1 className="text-2xl font-bold text-gray-800 mt-4 ml-">Recent Documents</h1> */}
        <CardList title='DOCUMENTS'/>
        <CardList title='BLOGS'/>
        <CardList title='LIBRARY'/>
        </div>
        
        
        
      
      
    </div>
  ); 
};

export default Dashboard;
