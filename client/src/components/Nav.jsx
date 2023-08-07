import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/NoteXlogo.png";

const Nav = () => {
  return (
    <nav className="bg-gray-200 p-2 items-center flex justify-left border-b border-white border">
      <div>
        <div className="text-gray-600 hover:text-gray-800 bg-white rounded-full">
          <img src={logo} width={40} height={40} />
        </div>
      </div>
      <ul className="flex space-x-4 pl-5">
        <li>
          <Link to="/file" className="text-gray-600 hover:text-gray-800">
            File
          </Link>
        </li>
        <li>
          <Link to="/edit" className="text-gray-600 hover:text-gray-800">
            Edit
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-gray-600 hover:text-gray-800">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
