import { SelectInputRow } from "./../../../components/FormComponents/Inputs";
const RowInputs = (props) => {
  const inputRowClass = "row align-items-center mb-2";
  if (props.disabled) {
    return (
      <div className={inputRowClass}>
        <label className="col-sm-5">{props.title}</label>
        <div className="col-sm-7">
          <div className="row">
            <div className="col mb-1">
              <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={inputRowClass}>
        <label className="col-sm-5">{props.title}</label>
        <div className="col-sm-7">
          <div className="row">
            <div className="col mb-1">
              <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RowInputs;

export const RowTextAreaInputs = (props) => {
  const inputRowClass = "row align-items-center mb-2";

  return (
    <div className={inputRowClass}>
      <label className="col-sm-5 ">{props.title}</label>
      <div className="col-sm-7">
        <textarea type={props.type} className="form-control"></textarea>
      </div>
    </div>
  );
};

export const DateTimeInputs = (props) => {
  const inputRowClass = "row align-items-center mb-2";
  return (
    <div className={inputRowClass}>
      <label className="col-sm-5">{props.title}</label>
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
  );
};

export const SelectOptionInputs = (props) => {
  const inputRowClass = "row align-items-center mb-2";

  return (
    <div className={inputRowClass}>
      <label className="col-sm-5 ">{props.title}</label>
      <div className="col-sm-7">
        <SelectInputRow options={props.jobTypeOptions} />
      </div>
    </div>
  );
};
