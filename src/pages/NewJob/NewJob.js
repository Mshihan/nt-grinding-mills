import React from "react";
import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import {
  NewJob_Link_Current,
  NewJob_Link_Active,
} from "../../components/Breadcumbs/BreadCrumbLinks";

const NewJob = (props) => {
  return (
    <>
      <div className="d-flex content-align-center justify-content-between mx-3">
        <h5 className="h5">CREATE JOB CARD</h5>
        <div>
          <BreadcrumbBar
            currentLink={NewJob_Link_Current}
            activeLinks={NewJob_Link_Active}
          />
        </div>
      </div>
    </>
  );
};

export default NewJob;
