import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "reactstrap";
import "./Alerts.css";

const Alerts = (props) => {
  return (
    <Alert
      color={props.color}
      isOpen={props.showAlert}
      className="d-flex align-items-center justify-content-between mb-4 alertClass"
    >
      {props.title}
    </Alert>

    // <div className="alert alert-success alert-dismissible d-flex align-items-center justify-content-between">
    //   <span className="mx-4">
    //     <strong>{props.title}</strong>
    //   </span>
    //   <button type="button" className="close button" data-dismiss="alert">
    //     <span>&times;</span>
    //   </button>
    // </div>
  );
};

export default Alerts;
