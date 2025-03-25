import { useState, JSX } from "react";
import { FaBars, FaHome, FaBook, FaUser, FaSignOutAlt, FaUpload, FaToolbox, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-resize.png";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className={`h-screen sticky top-0 bg-green-900 text-white ${isOpen ? "w-128" : "w-32"} transition-all duration-300`}>
      {/* Toggle Button */}
      <div className="flex items-center justify-between p-4">
        <h2 className={`${isOpen ? "block" : "hidden"} text-lg font-bold`}>NALTF<br/>
        <span><small>National Assembly Library Trust Fund</small></span>
        </h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <FaBars size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4">
        <ul>
          <MenuItem icon={<FaHome />} text="Home" link="/" isOpen={isOpen} />
          <MenuItem icon={<FaBook />} text="Books" link="/library" isOpen={isOpen} />
          <MenuItem icon={<FaUser />} text="Profile" link="/profile" isOpen={isOpen} />
          <MenuItem icon={<FaUpload/>} text="Scan and Upload" link="/scan" isOpen={isOpen} />
          <MenuItem icon={<FaToolbox />} text="Settings" link="/settings" isOpen={isOpen} />
          <MenuItem icon={<FaEye />} text="Create with OCR" link="/ocr" isOpen={isOpen} />
          <MenuItem icon={<FaSignOutAlt />} text="Logout" link="/logout" isOpen={isOpen} />
          
          <img src={logo} alt="NALTF Logo" className="w-24 h-24 m-auto" />
        </ul>
      </nav>
    </div>
  );
};

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  link: string;
  isOpen: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, link, isOpen }) => (
  <li>
    <Link
      to={link}
      className="flex items-center p-4 hover:bg-green-500 transition-all"
    >
      {icon}
      <span className={`${isOpen ? "block ml-4" : "mx-auto"} `}>{text}</span>
    </Link>
  </li>
);

export default SideMenu;