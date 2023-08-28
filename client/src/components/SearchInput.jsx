import { AiOutlineSearch } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { LiaPaletteSolid } from "react-icons/lia";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form class="flex items-center w-96">
        <label for="voice-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LiaPaletteSolid size={20} style={{ marginRight: "10px" }} />
          </div>
          <input
            type="text"
            id="voice-search"
            class="
      border-gray-300
        text-sm
        rounded-lg
        block w-full pl-10 p-2.5
        dark:bg-gray-300
        dark:placeholder-gray-400
        "
            placeholder="Search..."
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <BsMic size={20} />
          </button>
        </div>
        <button
          type="submit"
          class="inline-flex
     items-center
     py-2.5 
     px-3 
     ml-2 
     text-sm 
     font-medium 
     text-white 
     bg-purple-700 
     rounded-lg 
     border 
     focus:ring-4 
     focus:outline-none 
     focus:ring-blue-300 
     dark:bg-gradient-to-r from-indigo-500 to-pink-500 
     hover:from-indigo-600 hover:via-pink-600
     hover:to-red-600  uppercase  shadow-md mx-auto p-5
     dark:hover:bg-purple-700 
     dark:focus:ring-purple-800"
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
