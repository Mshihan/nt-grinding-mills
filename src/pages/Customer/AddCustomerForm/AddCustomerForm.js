import { Collapse } from "reactstrap";
import "./AddCustomerForm.css";
import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import Alerts from "../../../components/Alerts/Alerts";
import Inputs, {
  TextArea,
  SelectInput,
  SubmitButton,
  CancelButton,
} from "../../../components/FormComponents/Inputs";

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
  //Alert Message Display
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
  `;

  const titleDesignations = [
    "-Select-",
    "Ms",
    "Mrs",
    "Miss",
    "Dr",
    "Rev",
    "Other",
  ];

  const paymentType = [
    "-Select-",
    "Cash",
    "Credit",
    "Cheque",
    "Due on Recipt",
    "Advance",
  ];

  const customerType = ["-Select-", "Cash", "Company"];
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
                <SelectInput label="Customer Type" options={customerType} />
                <SelectInput label="Title" options={titleDesignations} />
                <Inputs label="Customer Name" type="text" />
              </div>
              <div className="col-lg-4">
                <TextArea label="Address" type="text" />

                <Inputs label="Customer Mobile" type="number" />
                <Inputs label="Customer Phone" type="number" />
                <Inputs label="Customer Email" type="email" />
              </div>
              <div className=" col-lg-4">
                <SelectInput label="Payment" options={paymentType} />
                <TextArea label="Remark" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end my-4">
                <SubmitButton title="Submit" />
                <CancelButton
                  title="Cancel"
                  onClickCloseAddNewCustomerForm={
                    props.onClickCloseAddNewCustomerForm
                  }
                />
              </div>
            </div>
          </div>
        </form>
      </Collapse>

      <div
        className="mx-2 px-4 mt-4 border border-dark py-3"
        // style={{ backgroundColor: "#DBDBDB" }}
      >
        <Table data={Data} click={clickhandler} />
      </div>
    </LoadingOverlay>
  );
};

export default AddCustomerForm;
