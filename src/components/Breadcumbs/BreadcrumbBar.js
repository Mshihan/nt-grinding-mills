import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import classes from "./Breadcrumb.module.css";

const BreadcrumbBar = (props) => {
  return (
    <div>
      <Breadcrumb className="breadcrumb">
        {/* <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem> */}
        {/* <BreadcrumbItem>
          <a href="/">Library</a>
        </BreadcrumbItem> */}
        <BreadcrumbItem className={classes.breadcrumb} active>
          Dashboard
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbBar;
