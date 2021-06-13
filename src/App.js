import "./App.css";
import { useState } from "react";
import SideBar from "./components/NavigationBars/SideBar";
import TopBar from "./components/NavigationBars/TopBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import BodyMargin from "./components/WrapperComponents/BodyMargin";
import { Route, Redirect } from "react-router-dom";
import Customers from "./pages/Customer/Customers";
import Login from "./pages/Login/Login";

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isExpandedProjects, setIsExpandedProjects] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const homeClass = isSideBarOpen ? "home sideBarOpen" : "home sideBarClose";
  const onClickSideBarOpenHandler = () => {
    setIsSideBarOpen((previousStatus) => !previousStatus);
  };

  const onLoginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  return (
    <>
      {!isLoggedIn && <Login onLogin={onLoginHandler} />}
      {isLoggedIn && (
        <div>
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
                <Customers />
              </Route>
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="*">
                <Redirect to="/dashboard" />
              </Route>
            </BodyMargin>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
