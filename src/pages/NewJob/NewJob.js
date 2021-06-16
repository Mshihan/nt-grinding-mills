import React from "react";
import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import {
  NewJob_Link_Current,
  NewJob_Link_Active,
} from "../../components/Breadcumbs/BreadCrumbLinks";
import "./NewJob.css";
import { Button } from "reactstrap";
import Data from "./Data/Data";
import Table from "./Data/Table";
import CustomerDetails from "./CustomerDetails/CustomerDetials";
import RowInputs, {
  DateTimeInputs,
  SelectOptionInputs,
  RowTextAreaInputs,
} from "./RowInputs/RowInputs";

import { jobTypeOptions, productionOptions } from "./DropdownValues";

const NewJob = (props) => {
  const mainFormClass = " px-2 py-2 rounded";
  const mainRightDivClass = "col-md-6";
  const inputRowClass = "row align-items-center mb-2";

  const clickhandler = (name) => console.log("delete", name);

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
      <section className="mx-1 row">
        <div className="col-sm-8">
          <div className="addJobForm rounded py-3">
            <div className={mainFormClass}>
              <div className="row">
                <div className={mainRightDivClass}>
                  <div className="mx-3">
                    <DateTimeInputs title="Appointment Date" />
                    <RowInputs type="text" title="Customer*" />
                    <RowInputs
                      type="text"
                      title="Customer Type*"
                      placeholder="-type-"
                      disabled={true}
                    />
                    <SelectOptionInputs
                      title="Job Type*"
                      jobTypeOptions={jobTypeOptions}
                    />

                    <SelectOptionInputs
                      title="Production*"
                      jobTypeOptions={productionOptions}
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="mx-2">
                    <RowInputs title="Advance" type="number" />
                    <RowTextAreaInputs type="text" title="Job Description" />
                  </div>
                </div>
              </div>
              <hr className="mx-3" />
              <div className="row my-3">
                <div className={mainRightDivClass}>
                  <div className="mx-2">
                    <RowInputs type="date" title="Date" />
                    <RowInputs
                      type="text"
                      placeholder="Items Remark"
                      title="Products"
                    />
                    <RowInputs
                      type="number"
                      title="Bag"
                      placeholder="No of Bags"
                    />
                    <RowInputs
                      type="number"
                      title="Weight(Kg)"
                      placeholder="Weight"
                    />
                    <div className="d-flex justify-content-end">
                      <Button color="success">Add </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="mx-2">
                    <div className={inputRowClass}>
                      <label className="col-sm-3">Warrent End: </label>
                      <div className="col-sm-6"></div>
                    </div>
                    <div className="col-sm-12 d-flex flex-row ">
                      <Button color="primary" className="mx-1">
                        Save Job
                      </Button>
                      <Button color="primary" className="mx-1">
                        Print
                      </Button>
                      <Button color="primary" className="mx-1">
                        Labour Print
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-2">
                <Table data={Data} click={clickhandler} />
              </div>
            </div>
          </div>
        </div>
        <CustomerDetails
          cusomterName=""
          customerAddress=""
          PhoneNumber=""
          creditLimit=""
          creditPeriod=""
          outStanding=""
          availableCreditLimit=""
        />
      </section>
    </>
  );
};

export default NewJob;
