import React, { useMemo } from "react";
import "./Table.css";
import DataTable, { createTheme } from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = (props) => {
  createTheme("solarized", {
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    background: {
      default: "#DBDBDB",
    },
    context: {
      background: "#000000",
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
      name: "#",
      selector: "id",
      sortable: true,
      grow: 0.5,
    },
    {
      name: "Date",
      selector: "email",
      sortable: true,
      // grow: 2,
    },
    {
      name: "Product Description",
      selector: "website",
      sortable: true,
      grow: 2,
    },
    {
      name: "Bag",
      selector: "company.name",
      sortable: true,
      grow: 0.8,
      //   hide: "md",
    },
    {
      name: "Weight",
      selector: "address.city",
      sortable: true,
      grow: 1.5,
      //   hide: "md",
    },
    {
      name: "###",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.click(row.name)}
          style={{ marginRight: "5px" }}
        >
          Delete
        </button>
      ),
    },
    // {
    //   name: "###",
    //   button: true,
    //   cell: (row) => (
    //     <button
    //       className="btn btn-sm btn-primary"
    //       onClick={() => props.click(row.name)}
    //     >
    //       view
    //     </button>
    //   ),
    // },
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
    // <DataTable
    //   title="Existing Customers"
    //   columns={columns}
    //   data={filteredItems}
    //   defaultSortField="name"
    //   striped
    //   pagination
    //   theme="solarized"
    //   noHeader="true"
    //   subHeader
    //   subHeaderAlign="start"
    //   highlightOnHover="true"
    //   subHeaderWrap="true"
    //   subHeaderComponent={subHeaderComponent}
    // />
    <DataTable
      // title="Existing Customers"
      columns={columns}
      data={filteredItems}
      striped
      highlightOnHover
      // subHeader
      // subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
