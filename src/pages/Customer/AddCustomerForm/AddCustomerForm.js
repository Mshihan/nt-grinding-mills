import { Collapse } from "reactstrap";
import "./AddCustomerForm.css";
import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import Alerts from "../../../components/Alerts/Alerts";

// import Table from "./Data/Table";
// import Data from "./Data/Data";
import Data from "./../../../components/Data/Data";
import Table from "./../../../components/Data/Table";

const AddCustomerForm = (props) => {
  const [isLoadingAddNewUser, setIsLoadingAddNewUser] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const clickhandler = (name) => console.log("delete", name);
  const onAddNewCustomerSubmitHandler = (event) => {
    event.preventDefault();

    //Api Request to add new customer
    setIsLoadingAddNewUser(true);
    setTimeout(() => {
      setIsLoadingAddNewUser(false);
      showAlertMessage();
    }, 3000);
  };

  const showAlertMessage = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  const spinnerCss = css`
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-color: red;
  `;
  const alertMessage = "Added customer successfully";
  const alertColor = "success";
  return (
    <LoadingOverlay
      active={isLoadingAddNewUser}
      spinner={<HashLoader css={spinnerCss} color="white" />}
      text="Adding New Customer...."
    >
      <Collapse isOpen={props.addNewCustomerFormDisplay}>
        <form
          className=" mx-2 mt-3"
          onSubmit={onAddNewCustomerSubmitHandler}
          style={{ fontSize: ".85rem", fontWeight: "550" }}
        >
          <Alerts
            showAlert={showAlert}
            title={alertMessage}
            color={alertColor}
          />
          <div className=" bg-light p-3 border border-dark rounded">
            <div className="row">
              <h4 className="text-center text-uppercase"> Add Customer</h4>
              <div className=" col-lg-4">
                {/* Customer Type */}
                <div class="form-group">
                  <label>Customer Type</label>
                  <select id="customerType" class="form-control">
                    <option>-Select-</option>
                    <option>Cash</option>
                    <option>Company</option>
                  </select>
                </div>
                {/* Title */}
                <div class="form-group">
                  <label>Title</label>
                  <select class="form-control">
                    <option>-Select-</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Dr</option>
                    <option>Rev</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* Customer Name */}
                <div className="form-group">
                  <label>Customer Name</label>
                  <input className="form-control" type="text" required />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="form-group">
                  <label>Address</label>
                  <textarea type="text" className="form-control" />
                </div>

                <div class="form-group">
                  <label>Customer Mobile</label>
                  <input type="number" className="form-control" />
                </div>

                <div class="form-group">
                  <label>Customer Phone</label>
                  <input type="number" className="form-control" />
                </div>

                <div class="form-group">
                  <label>Customer Email</label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className=" col-lg-4">
                <div class="form-group">
                  <label>Payment</label>
                  <select id="payment" class="form-control" type="dropdown">
                    <option>-Select-</option>
                    <option>Cash</option>
                    <option>Credit</option>
                    <option>Cheque</option>
                    <option>Due on Recipt</option>
                    <option>Advance</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Remark</label>
                  <textarea type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end my-4">
                <button type="submit" className="btn btn-outline-primary mx-3">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={props.onClickCloseAddNewCustomerForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </Collapse>

      <div
        className="mx-2 px-4 mt-4 border border-dark py-3"
        style={{ backgroundColor: "#DBDBDB" }}
      >
        <Table data={Data} click={clickhandler} />
      </div>
    </LoadingOverlay>
  );
};

export default AddCustomerForm;
