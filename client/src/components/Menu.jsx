import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiFolderPlus } from "react-icons/fi";

const Menu = () => {
  const [isAddFolder, setAddFolder] = useState(false);
  const [newFolder, setNewFolder] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (isAddFolder) {
      inputRef.current.focus();
    }
  }, [isAddFolder]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        if (newFolder) {
          setAddFolder(false);
        } else {
          setAddFolder(false);
          setNewFolder("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [newFolder]);

  const handleAddFolder = () => {
    setAddFolder((prevState) => !prevState);
  };

  const handleFolderChange = (event) => {
    setNewFolder(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newFolder) {
      setAddFolder(false);
    }
  };

  return (
    <div className="flex flex-col items-start p-4 bg-gray-200 border-b border-white borde">
      <button className="pb-3" onClick={handleAddFolder}>
        <div className="relative group inline-block">
          <FiFolderPlus size={20} />
          <p className="hidden group-hover:block absolute bg-white border border-gray-200 p-2 rounded-md text-sm text-gray-500 left-full top-0">
            Add folder
          </p>
        </div>
      </button>

      <div className="flex justify-between items-center w-full mb-2 hover:text-gray-500 cursor-pointer">
        <p className="pr-5">
          <AiOutlineArrowDown />
        </p>
        <p>a hardcoded folder</p>
      </div>

      {isAddFolder ? (
        <div className="flex justify-between items-center w-full mb-2 cursor-pointer">
          <p className="pr-5">
            <AiOutlineArrowDown />
          </p>
          <input
            ref={inputRef}
            className="bg-white"
            onChange={handleFolderChange}
            onKeyDown={handleKeyDown}
            value={newFolder}
          />
        </div>
      ) : (
        <div className="flex justify-between items-center w-full mb-2 cursor-pointer">
          <p className="pr-5">
            <AiOutlineArrowDown />
          </p>
          <p>{newFolder}</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
