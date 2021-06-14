import {
  faBars,
  faBook,
  faFolder,
  faTh,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import "./SideBar.css";
import { Collapse } from "reactstrap";

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
            <span className="nav__name">Dashboard</span>
          </NavLink>
          <NavLink
            to="/customers"
            className="nav__link"
            activeClassName="activeSideBar"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faUser} className="nav__icon" />
            <span className="nav__name">Customers</span>
          </NavLink>
          {/* <NavLink
            to="/alljobs"
            className="nav__link"
            activeClassName="activeSideBar"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faBook} className="nav__icon" />
            <span className="nav__name">Jobs</span>
          </NavLink> */}
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
          <NavLink
            activeClassName="activeSideBarCollapse"
            to="/alljobs"
            className="nav__linkCollapse collapseSideBar"
            onClick={() => props.setIsExpandedProjects((previous) => !previous)}
          >
            <FontAwesomeIcon icon={faBook} className="nav__icon" />
            <span class="nav__name">Jobs</span>
            <FontAwesomeIcon icon={faCaretDown} className="nav__icon" />
            <Collapse isOpen={props.isExpandedProjects}>
              <div className="mt-2 ">
                <Link
                  to="/allJobs"
                  class="collapse__sublink row mx-4 "
                  style={{ textDecoration: "none" }}
                >
                  Add New Job
                </Link>
              </div>
            </Collapse>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
