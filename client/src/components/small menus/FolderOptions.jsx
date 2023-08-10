import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiSolidRename } from "react-icons/bi";
import {AiOutlinePlusCircle} from 'react-icons/ai'

const FolderOptions = () => {
  return (
    <div className="relative">
      <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white">

        <div className="py-1 rounded-md bg-white shadow-xs">

        <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-2">
            <button className="text-sm leading-5 text-gray-700">New Note</button>
            <AiOutlinePlusCircle />
          </div>

          <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-2">
            <button className="text-sm leading-5 text-gray-700">Rename</button>
            <BiSolidRename />
          </div>

          <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-2">
            <button className="text-sm leading-5 text-gray-700">Delete</button>
            <BsTrash />
          </div>

        </div>

      </div>
    </div>
  );
};

export default FolderOptions;
