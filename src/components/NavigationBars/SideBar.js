import { faBars, faTh, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = (props) => {
  const navBarClasses = props.isSideBarOpen ? "sidebar open" : "sidebar close";

  return (
    <>
      <div className={navBarClasses} id="sideBar">
        <div href="/" className="nav__brand bg-white rounded">
          <FontAwesomeIcon
            onClick={props.onClickSideBarOpenHandler}
            icon={faBars}
            style={{ marginLeft: 13 }}
          />
          <div className="px-5 my-2">
            <strong>Msoft</strong>Pos
          </div>
        </div>
        <div className="sideBarNavigationLink">
          <NavLink
            to="/dashboard"
            className="nav__link"
            activeClassName="activeSideBar"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faTh} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </NavLink>

          <NavLink
            to="/customers"
            className="nav__link"
            activeClassName="activeSideBar"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faUser} className="nav__icon" />
            <span class="nav__name">Customer</span>
          </NavLink>

          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}
          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}
          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}
          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}
          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}
          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}
          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}

          {/* <a href="/" class="nav__link  " style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} className="nav__icon" />
            <span class="nav__name">Dashboard</span>
          </a> */}

          {/* <div
            class="nav__link collapseSideBar"
            onClick={() => props.setIsExpandedProjects((previous) => !previous)}
          >
            <FontAwesomeIcon icon={faFolder} className="nav__icon" />
            <span class="nav__name">Projects</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="collapse__link align-self-end"
            />

            <Collapse isOpen={props.isExpandedProjects}>
              <div className="row mx-4 mt-2 ">
                <a
                  href="/"
                  class="collapse__sublink mt-2 "
                  style={{ textDecoration: "none" }}
                >
                  Data
                </a>
                <a
                  href="/"
                  class="collapse__sublink mt-1"
                  style={{ textDecoration: "none" }}
                >
                  Group
                </a>
                <a
                  href="/"
                  class="collapse__sublink mt-1 "
                  style={{ textDecoration: "none" }}
                >
                  Members
                </a>
              </div>
            </Collapse>
          </div>
        */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
