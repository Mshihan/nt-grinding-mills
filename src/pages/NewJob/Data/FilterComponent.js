import React from "react";

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <input
      id="search"
      type="text"
      className="form-control w-25 m-0"
      style={{
        fontSize: 10,
      }}
      placeholder="Search"
      value={filterText}
      onChange={onFilter}
    />
  </>
);

export default FilterComponent;
