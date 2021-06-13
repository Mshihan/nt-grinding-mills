import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import { Customer_Link } from "../../components/Breadcumbs/BreadCrumbLinks";
const Customers = (props) => {
  return (
    <>
      <div className="d-flex content-align-center justify-content-between mx-3">
        <h5 className="h5">CUSTOMER</h5>
        <div>
          <BreadcrumbBar currentLink={Customer_Link} activeLinks={[]} />
        </div>
      </div>
    </>
  );
};

export default Customers;
