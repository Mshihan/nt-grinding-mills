import "./App.css";
import { useState } from "react";
import SideBar from "./components/NavigationBars/SideBar";
import TopBar from "./components/NavigationBars/TopBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import BodyMargin from "./components/WrapperComponents/BodyMargin";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
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
        <BodyMargin>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/customers" exact>
            <h1>Customer</h1>
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
        </BodyMargin>
      </div>
    </>
  );
};

export default App;
