import React from "react";

const Input = (props) => {
  const { type, label, ref } = props;

  return (
    <div class="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" ref={ref} />
    </div>
  );
};

export const TextArea = (props) => {
  const { type, label, ref } = props;
  return (
    <div class="form-group">
      <label>{label}</label>
      <textarea type={type} className="form-control" ref={ref} />
    </div>
  );
};

export const SelectInput = (props) => {
  const { label, options } = props;
  return (
    <div class="form-group">
      <label>{label}</label>
      <select class="form-control">
        {options.map((dropdownOption) => {
          return <option>{dropdownOption}</option>;
        })}
      </select>
    </div>
  );
};

export const SubmitButton = (props) => {
  return (
    <button type="submit" className="btn btn-sm btn-outline-primary mx-3">
      {props.title}
    </button>
  );
};

export const CancelButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-outline-danger btn-sm"
      onClick={props.onClickCloseAddNewCustomerForm}
    >
      {props.title}
    </button>
  );
};

export default Input;
