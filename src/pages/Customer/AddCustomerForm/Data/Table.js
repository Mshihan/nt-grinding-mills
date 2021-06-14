import React, { useMemo } from "react";
import "./Table.css";
import DataTable, { createTheme } from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = (props) => {
  createTheme("solarized", {
    text: {
      primary: "#000000",
      secondary: "#000000DD",
    },
    background: {
      default: "#FAFAFA",
    },
    context: {
      background: "red",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  });

  const columns = [
    {
      name: "ID",
      selector: "name",
      sortable: true,
      //   grow: 2,
    },
    {
      name: "Name",
      selector: "email",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "website",
      sortable: true,
    },
    {
      name: "Company",
      selector: "company.name",
      sortable: true,
      //   hide: "md",
    },
    {
      name: "City",
      selector: "address.city",
      sortable: true,
      //   hide: "md",
    },
    {
      name: "###",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => props.click(row.name)}
          style={{ marginRight: "5px" }}
        >
          Edit
        </button>
      ),
    },
    {
      name: "###",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => props.click(row.name)}
        >
          Delete
        </button>
      ),
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Existing Customers"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      //   striped
      pagination
      theme="solarized"
      noHeader="true"
      subHeader
      subHeaderAlign="start"
      highlightOnHover="true"
      subHeaderWrap="true"
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
