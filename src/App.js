import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isExpandedProjects, setIsExpandedProjects] = useState();

  const homeClass = isSideBarOpen ? "home sideBarOpen" : "home sideBarClose";
  const onClickSideBarOpenHandler = () => {
    setIsSideBarOpen((previousStatus) => !previousStatus);
  };

  return (
    <>
      <SideBar
        isSideBarOpen={isSideBarOpen}
        onClickSideBarOpenHandler={onClickSideBarOpenHandler}
        setIsExpandedProjects={setIsExpandedProjects}
        isExpandedProjects={isExpandedProjects}
      />
      <div className={homeClass}>
        <TopBar />
      </div>
    </>
  );
}

export default App;
