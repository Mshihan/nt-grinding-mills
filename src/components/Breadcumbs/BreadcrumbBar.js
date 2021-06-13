import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import classes from "./Breadcrumb.module.css";
import { Link } from "react-router-dom";

const BreadcrumbBar = (props) => {
  const activeLinks = props.activeLinks.map((link) => {
    return (
      <BreadcrumbItem className={classes.breadcrumbNotActivated}>
        <Link to={link.link}>{link.activeTitle}</Link>
      </BreadcrumbItem>
    );
  });

  const currentLink = props.currentLink.map((link) => {
    return (
      <BreadcrumbItem className={classes.breadcrumb} active>
        {link.currentTitle}
      </BreadcrumbItem>
    );
  });
  return (
    <div>
      <Breadcrumb>
        {/* <BreadcrumbItem className={classes.breadcrumbNotActivated}>
          <Link to="/customers">Customers</Link>
        </BreadcrumbItem>
        <BreadcrumbItem className={classes.breadcrumb} active>
          Dashboard
        </BreadcrumbItem> */}
        {activeLinks}
        {currentLink}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbBar;
