import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Sidebar from "./Sidebar";
import FolderOptions from "./small menus/FolderOptions";

const Dashboard = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleRightClick = (e) => {
    e.preventDefault();
    setMousePosition({ x: e.clientX, y: e.clientY });
    setShowMenuOptions(true);
  };

  const preventDefaultBehavior = (e) => {
    e.preventDefault();
  }

  const handleClickAnywhere = (e) => {
    setShowMenuOptions(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAnywhere);

    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, []);

  return (
    <>
      <div onContextMenu={preventDefaultBehavior}>
        <Nav />
        <Sidebar
          showMenuOptions={showMenuOptions}
          mousePosition={mousePosition}
          handleRightClick={handleRightClick}
          handleClickAnywhere={handleClickAnywhere}
        />
        {showMenuOptions && (
          <div
            style={{
              position: "absolute",
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          >
            <FolderOptions />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
