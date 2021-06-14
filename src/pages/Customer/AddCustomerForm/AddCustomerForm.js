import { Collapse } from "reactstrap";
import "./AddCustomerForm.css";
import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";

const AddCustomerForm = (props) => {
  const [isLoadingAddNewUser, setIsLoadingAddNewUser] = useState(false);

  const onAddNewCustomerSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoadingAddNewUser(true);
  };
  return (
    <LoadingOverlay
      active={isLoadingAddNewUser}
      spinner
      text="Adding New Customer...."
    >
      <Collapse isOpen={props.addNewCustomerFormDisplay}>
        <form
          className=" mx-2 my-5"
          onSubmit={onAddNewCustomerSubmitHandler}
          style={{ fontSize: ".85rem", fontWeight: "550" }}
        >
          <div className=" bg-light p-3 border border-dark rounded">
            <div className="row">
              <h4 className="text-center text-uppercase"> Add Customer</h4>
              <div className=" col-lg-4">
                {/* Customer Type */}
                <div class="form-group">
                  <label for="customer type">Customer Type</label>
                  <select id="customerType" class="form-control">
                    <option>-Select-</option>
                    <option>Cash</option>
                    <option>Company</option>
                  </select>
                </div>
                {/* Title */}
                <div class="form-group">
                  <label for="Title">Title</label>
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
    </LoadingOverlay>
  );
};

export default AddCustomerForm;
