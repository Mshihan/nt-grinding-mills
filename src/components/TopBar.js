import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const TopBar = (props) => {
  return (
    <Navbar color="dark row">
      <div className="px-5 d-flex justify-content-between">
        <NavbarBrand style={{ textDecoration: "none" }}>
          <h4 className="text-white text-uppercase  font-weight-bold my-2">
            NT Grindings
          </h4>
        </NavbarBrand>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="align-self-center"
          style={{ color: "white" }}
        />
      </div>
    </Navbar>
  );
};

export default TopBar;
