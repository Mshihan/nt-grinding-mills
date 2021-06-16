import React from "react";
import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import {
  NewJob_Link_Current,
  NewJob_Link_Active,
} from "../../components/Breadcumbs/BreadCrumbLinks";
import "./NewJob.css";
import { SelectInputRow } from "./../../components/FormComponents/Inputs";
import { Button } from "reactstrap";
import Data from "./Data/Data";
import Table from "./Data/Table";

const NewJob = (props) => {
  const mainFormClass = " px-2 py-2 rounded";
  const mainRightDivClass = "col-md-6";
  const inputRowClass = "row align-items-center mb-2";

  const jobTypeOptions = ["-Select-", "New", "Repeat", "Sale"];
  const productionOptions = [
    "-Select a section-",
    "Chilli",
    "Curry",
    "Corriander",
    "Pepper",
    "Turmaric",
  ];

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
          <form className="addJobForm rounded py-3">
            <div className={mainFormClass}>
              <div className="row">
                <div className={mainRightDivClass}>
                  <div className="mx-3">
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Appointment Date*</label>
                      <div className="col-sm-7">
                        <div className="row">
                          <div className="col mb-1">
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col">
                            <input type="time" className="form-control " />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Customer*</label>
                      <div className="col-sm-7">
                        <input className="form-control"></input>
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Customer Type*</label>
                      <div className="col-sm-7">
                        <input
                          className="form-control"
                          disabled
                          placeholder="Cash"
                        ></input>
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5 ">Job Type*</label>
                      <div className="col-sm-7">
                        <SelectInputRow options={jobTypeOptions} />
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5 ">Production*</label>
                      <div className="col-sm-7">
                        <SelectInputRow options={productionOptions} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="mx-2">
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Advance*</label>
                      <div className="col-sm-7">
                        <input type="number" className="form-control"></input>
                      </div>
                    </div>

                    <div className={inputRowClass}>
                      <label className="col-sm-5 ">Job Description</label>
                      <div className="col-sm-7">
                        <textarea
                          type="number"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mx-3" />
              <div className="row my-3">
                <div className={mainRightDivClass}>
                  <div className="mx-2">
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Date</label>
                      <div className="col-sm-7">
                        <div className="row">
                          <div className="col mb-1">
                            <input
                              type="date"
                              className="form-control"
                              defaultValue={() => new Date.toString()}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Product</label>
                      <div className="col-sm-7">
                        <input
                          className="form-control"
                          placeholder="Items Remarks"
                        />
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5">Bag</label>
                      <div className="col-sm-7">
                        <input
                          className="form-control"
                          placeholder="No of Bags"
                        />
                      </div>
                    </div>
                    <div className={inputRowClass}>
                      <label className="col-sm-5 ">Weight(Kg)</label>
                      <div className="col-sm-7">
                        <input className="form-control" placeholder="Weight" />
                      </div>
                    </div>
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
                <div className="">
                  <Table data={Data} />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-4">
          <div className="addJobForm rounded py-3 px-3">
            <p style={{ fontWeight: "bold", fontSize: 18 }}>Customer Details</p>
            <div className="mx-2 mb-1 label">Customer Name: </div>
            <div className="mx-2 mb-1 label">Customer Address: </div>
            <div className="mx-2 mb-4 label">Phone Number: </div>

            <p style={{ fontWeight: "bold", fontSize: 18 }}> Credit Limit</p>
            <div className="mx-2 mb-1 label">Credit Limit: </div>
            <div className="mx-2 mb-1 label">Credit Period: </div>
            <div className="mx-2 mb-1 label">Outstanding: </div>
            <div className="mx-2 mb-4 label">Available Credit Limit: </div>

            <div className="col-sm-12 d-flex flex-row ">
              <Button color="success" className="mx-1">
                View All Jobs
              </Button>
              <Button color="light" className="mx-1" disabled>
                Add Invoice
              </Button>
              <Button color="light" className="mx-1" disabled>
                Add Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewJob;
