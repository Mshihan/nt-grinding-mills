import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const TopBar = (props) => {
  const logoutHandler = () => {
    props.logOut();
  };
  return (
    <Navbar style={{ backgroundColor: "#12192c" }} className="row">
      <div
        className="d-flex justify-content-between"
        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
      >
        <NavbarBrand style={{ textDecoration: "none" }}>
          <h4 className="text-white text-uppercase  font-weight-bold my-2">
            NT Grindings
          </h4>
        </NavbarBrand>
        <FontAwesomeIcon
          onClick={logoutHandler}
          icon={faSignOutAlt}
          className="align-self-center"
          style={{ color: "white" }}
        />
      </div>
    </Navbar>
  );
};

export default TopBar;
