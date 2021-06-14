import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import { Customer_Link } from "../../components/Breadcumbs/BreadCrumbLinks";
import React, { useState } from "react";
import "./Customers.css";
import AddCustomerForm from "./AddCustomerForm/AddCustomerForm";

const Customers = (props) => {
  const [addNewCustomerFormDisplay, setAddNewCustomerFormDisplay] =
    useState(false);

  const onClickAddCustomer = () => {
    setAddNewCustomerFormDisplay((prevState) => !prevState);
  };

  const onClickCloseAddNewCustomerForm = () => {
    setAddNewCustomerFormDisplay((prevState) => !prevState);
  };

  return (
    <>
      <div className="d-flex content-align-center justify-content-between mx-3">
        <h5 className="h5">CUSTOMER</h5>
        <div>
          <BreadcrumbBar currentLink={Customer_Link} activeLinks={[]} />
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary btn-sm mx-2"
            onClick={onClickAddCustomer}
          >
            Add Customer
          </button>
        </div>
      </div>
      <AddCustomerForm
        addNewCustomerFormDisplay={addNewCustomerFormDisplay}
        onClickCloseAddNewCustomerForm={onClickCloseAddNewCustomerForm}
      />
    </>
  );
};

export default Customers;
