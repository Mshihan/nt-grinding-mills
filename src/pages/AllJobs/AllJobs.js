import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import { AllJobs_Link } from "../../components/Breadcumbs/BreadCrumbLinks";

import Data from "./../../components/Data/Data";
import Table from "./../../components/Data/Table";

const AllJobs = (props) => {
  const onClickAddNewJobHandler = () => {
    console.log("Add New Job");
  };

  const clickhandler = (name) => console.log("delete", name);
  return (
    <>
      <div className="d-flex content-align-center justify-content-between mx-3">
        <h5 className="h5">ALL JOBS</h5>
        <div>
          <BreadcrumbBar currentLink={AllJobs_Link} activeLinks={[]} />
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary btn-sm mx-2"
            onClick={onClickAddNewJobHandler}
          >
            Add new job
          </button>
        </div>
      </div>
      <div
        className="mx-2 px-4 mt-4 border border-dark py-3"
        style={{ backgroundColor: "#DBDBDB" }}
      >
        <Table data={Data} click={clickhandler} />
      </div>
    </>
  );
};

export default AllJobs;
