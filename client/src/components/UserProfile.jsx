import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsCloudArrowUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlinePriceChange } from "react-icons/md";

function UserProfile() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-zinc-800 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-white pl-4">Menu</h1>
        <nav>
          <a
            href="#account"
            className="flex items-center py-2 px-4 text-white hover:bg-zinc-700 rounded-lg mb-2"
          >
            <BiSolidUserCircle className="mr-2" /> Account
          </a>
          <a
            href="#account"
            className="flex items-center py-2 px-4 text-white hover:bg-zinc-700 rounded-lg mb-2"
          >
            <MdOutlinePriceChange className="mr-2" /> Pricing
          </a>
          <a
            href="#cloud"
            className="flex items-center py-2 px-4 text-white hover:bg-zinc-700 rounded-lg mb-2"
          >
            <BsCloudArrowUp className="mr-2" /> Cloud
          </a>
          <a
            href="#settings"
            className="flex items-center py-2 px-4 text-white hover:bg-zinc-700 rounded-lg mb-2"
          >
            <FiSettings className="mr-2" /> Settings
          </a>
        </nav>
      </div>

      <div className="flex-1 p-8 flex flex-col">
        <div className="flex flex-row h-1/2">
          <div className="w-1/4 bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-center relative">
            <img
              className="rounded-full w-32 h-32"
              src="https://placekitten.com/200/200"
              alt="User profile"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              John Doe
            </h2>
          </div>
          <div className="w-3/4 grid grid-cols-1 gap-4 pl-8">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-700 mt-2">john.doe@example.com</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-gray-700 mt-2">123 Main St, Springfield</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Password
                </h2>
                <p className="text-gray-700 mt-2">••••••••</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Change Password
              </button>
            </div>
          </div>
        </div>
        {/* Other content can be placed here */}
      </div>
    </div>
  );
}

export default UserProfile;
