import DashboardCard from "./Utility/DashboardCard";

export const Dashboard_Items_First_Row = [
  {
    icon: "faUser",
    heading: "Manage Customer",
    title: "Customer",
    iconColor: "#00C0EF",
  },
  {
    icon: "faCartPlus",
    heading: "jobs",
    title: "All jobs",
    iconColor: "#D81B60",
  },
  {
    icon: "faListAlt",
    heading: "new bill",
    title: "New Bill",
    iconColor: "#DD4B39",
  },
  {
    icon: "faEdit",
    heading: "All Bill",
    title: "All Bill",
    iconColor: "#FF851B",
  },
];

export const Dashboard_Items_Second_Row = [
  {
    icon: "faTags",
    heading: "Product",
    title: "Product",
    iconColor: "#00A65A",
  },
  {
    icon: "faUsers",
    heading: "Salary",
    title: "Salary",
    iconColor: "#CCCCCC",
  },
  {
    icon: "faThLarge",
    heading: "New Cost",
    title: "New Cost",
    iconColor: "#605CA8",
  },
  {
    icon: "faBook",
    heading: "All Cost",
    title: "All Cost",
    iconColor: "#00C0EF",
  },
];

export const Dashboard_Items_Third_Row = [
  {
    icon: "faTruck",
    heading: "Transfer",
    title: "Transfer",
    iconColor: "#605CA8",
  },
  {
    icon: "faBolt",
    heading: "Electricity",
    title: "Electricity",
    iconColor: "#DD4B39",
  },
  {
    icon: "faUsers",
    heading: "Day Summary",
    title: "Day Summary",
    iconColor: "#D81B60",
  },
  {
    icon: "faThLarge",
    heading: "Masterboard",
    title: "Masterboard",
    iconColor: "#605CA8",
  },
];

export const Dashboard_Items_Forth_Row = [
  {
    icon: "faEdit",
    heading: "Return",
    title: "Return",
    iconColor: "#FF851B",
  },
  {
    icon: "faTags",
    heading: "Stock",
    title: "Stock Summary",
    iconColor: "#00A65A",
  },
  {
    icon: "faThLarge",
    heading: "Return",
    title: "Return Summary",
    iconColor: "#605CA8",
  },
  {
    icon: "faUsers",
    heading: "Supplier Sales",
    title: "Supplier Sales",
    iconColor: "#CCCCCC",
  },
];

export const Dashboard_Items_Fifth_Row = [
  {
    icon: "faBolt",
    heading: "Customer",
    title: "Customer Outstanding",
    iconColor: "#DD4B39",
  },
];

export const CardItemFetching = (ItemsList, last = true) => {
  if (last) {
    return ItemsList.map((card) => {
      return (
        <div className="col-md my-1">
          <DashboardCard
            icon={card.icon}
            heading={card.heading}
            title={card.title}
            iconColor={card.iconColor}
          />
        </div>
      );
    });
  } else {
    return ItemsList.map((card) => {
      return (
        <>
          <div className="col-md my-1">
            <DashboardCard
              icon={card.icon}
              heading={card.heading}
              title={card.title}
              iconColor={card.iconColor}
            />
          </div>

          <div className="col-md my-1"></div>
          <div className="col-md my-1"></div>
          <div className="col-md my-1"></div>
        </>
      );
    });
  }
};
