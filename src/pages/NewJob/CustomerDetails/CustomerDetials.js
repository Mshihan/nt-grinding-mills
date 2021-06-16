import React from "react";
import { Button } from "reactstrap";

const CustomerDetails = (props) => {
  return (
    <div className="col-sm-4">
      <div className="addJobForm rounded py-3 px-3">
        <p style={{ fontSize: 20 }}>Customer Details</p>
        <div className="mx-2 mb-1 label">Customer Name: </div>
        <div className="mx-2 mb-1 label">Customer Address: </div>
        <div className="mx-2 mb-4 label">Phone Number: </div>

        <p style={{ fontSize: 20 }}> Credit Limit</p>
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
  );
};

export default CustomerDetails;
