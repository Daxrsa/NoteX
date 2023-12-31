import React, { useState, useRef, useEffect } from "react";
import Menu from "./Menu";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import { BsTerminal } from "react-icons/bs";
import Note from "../components/editor/Note";
import { AiOutlineSearch } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";

const Sidebar = ({ handleRightClick }) => {
  const [showMenu, setShowMenu] = useState(true);

  const [showSearch, setShowSearch] = useState(true);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className="bg-gray-200 w-14 min-h-screen flex flex-col items-center py-4 border-b border-white border
     hover:text-gray-800"
      >
        <div to="/file" className="mb-4 text-gray-600 hover:text-gray-800">
          <div className="relative group inline-block cursor-pointer">
            <AiOutlineFolderOpen size={20} onClick={toggleMenu} />
            {showMenu ? (
              <p
                onClick={toggleMenu}
                className="hidden group-hover:block absolute bg-white border border-gray-200 p-2 rounded-md text-sm text-gray-500 left-full top-0 z-50"
              >
                Collapse
              </p>
            ) : (
              <p
                onClick={toggleMenu}
                className="hidden group-hover:block absolute bg-white border border-gray-200 p-2 rounded-md text-sm text-gray-500 left-full top-0 z-50"
              >
                Open
              </p>
            )}
          </div>
        </div>
        <div to="/file" className="mb-4 text-gray-600 hover:text-gray-800">
          <div className="relative group inline-block cursor-pointer">
            <AiOutlineSearch size={20} />
            <button 
            onClick={toggleSearch}
            className="hidden group-hover:block absolute bg-white border border-gray-200 p-2 rounded-md text-sm text-gray-500 left-full top-0">
              Search
            </button>
          </div>
        </div>
        <div to="/edit" className="mb-4 text-gray-600 hover:text-gray-800">
          <div className="relative group inline-block cursor-pointer">
            <GrGraphQl size={20} />
            <p className="hidden group-hover:block absolute bg-white border border-gray-200 p-2 rounded-md text-sm text-gray-500 left-full top-0">
              Graph
            </p>
          </div>
        </div>
        <div to="/" className="mb-4 text-gray-600 hover:text-gray-800">
          <div className="relative group inline-block cursor-pointer">
            <BsTerminal size={20} />
            <p className="hidden group-hover:block absolute bg-white border border-gray-200 p-2 rounded-md text-sm text-gray-500 left-full top-0">
              Terminal
            </p>
          </div>
        </div>
      </div>
      {showMenu && <Menu {...{ handleRightClick }} />}
      <Note />
    </div>
  );
};

export default Sidebar;
