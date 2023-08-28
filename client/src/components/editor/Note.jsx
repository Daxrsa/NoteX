import { useState } from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import SearchInput from "../SearchInput";

const Note = () => {
  const [isEditing, setIsEditing] = useState(true);

  const [title, setTitle] = useState("");

  const [text, setText] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleEyeClick = () => {
    setIsEditing(false);
  };

  const handlePenClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex items-start py-10 border-b border-white pl-20">
      {isEditing ? (
        <>
          <div className="flex flex-col">
            <input
              className="font-bold text-5xl"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <input
              className="pt-8"
              placeholder="Text..."
              value={text}
              onChange={handleTextChange}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="font-bold text-5xl">{title}</div>
            <p className="pt-8">{text}</p>
          </div>
        </>
      )}
      {isEditing ? (
        <div className="pl-80">
          <button
            className="hover:bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={handleEyeClick}
          >
            <AiOutlineEye size={24} />
          </button>
        </div>
      ) : (
        <div className="pl-80">
          <button
            className="hover:bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={handlePenClick}
          >
            <AiOutlineEdit size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;

