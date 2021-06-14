import DashboardCard from "./Utility/DashboardCard";

export const Dashboard_Items_First_Row = [
  {
    icon: "faUser",
    heading: "Manage Customer",
    title: "Customer",
    iconColor: "#00C0EF",
    link: "/customers",
  },
  {
    icon: "faCartPlus",
    heading: "jobs",
    title: "All jobs",
    iconColor: "#D81B60",
    link: "/alljobs",
  },
  {
    icon: "faListAlt",
    heading: "new bill",
    title: "New Bill",
    iconColor: "#DD4B39",
    link: "/customers",
  },
  {
    icon: "faEdit",
    heading: "All Bill",
    title: "All Bill",
    iconColor: "#FF851B",
    link: "/customers",
  },
];

export const Dashboard_Items_Second_Row = [
  {
    icon: "faTags",
    heading: "Product",
    title: "Product",
    iconColor: "#00A65A",
    link: "/customers",
  },
  {
    icon: "faUsers",
    heading: "Salary",
    title: "Salary",
    iconColor: "#CCCCCC",
    link: "/customers",
  },
  {
    icon: "faThLarge",
    heading: "New Cost",
    title: "New Cost",
    iconColor: "#605CA8",
    link: "/customers",
  },
  {
    icon: "faBook",
    heading: "All Cost",
    title: "All Cost",
    iconColor: "#00C0EF",
    link: "/customers",
  },
];

export const Dashboard_Items_Third_Row = [
  {
    icon: "faTruck",
    heading: "Transfer",
    title: "Transfer",
    iconColor: "#605CA8",
    link: "/customers",
  },
  {
    icon: "faBolt",
    heading: "Electricity",
    title: "Electricity",
    iconColor: "#DD4B39",
    link: "/customers",
  },
  {
    icon: "faUsers",
    heading: "Day Summary",
    title: "Day Summary",
    iconColor: "#D81B60",
    link: "/customers",
  },
  {
    icon: "faThLarge",
    heading: "Masterboard",
    title: "Masterboard",
    iconColor: "#605CA8",
    link: "/customers",
  },
];

export const Dashboard_Items_Forth_Row = [
  {
    icon: "faEdit",
    heading: "Return",
    title: "Return",
    iconColor: "#FF851B",
    link: "/customers",
  },
  {
    icon: "faTags",
    heading: "Stock",
    title: "Stock Summary",
    iconColor: "#00A65A",
    link: "/customers",
  },
  {
    icon: "faThLarge",
    heading: "Return",
    title: "Return Summary",
    iconColor: "#605CA8",
    link: "/customers",
  },
  {
    icon: "faUsers",
    heading: "Supplier Sales",
    title: "Supplier Sales",
    iconColor: "#CCCCCC",
    link: "/customers",
  },
];

export const Dashboard_Items_Fifth_Row = [
  {
    icon: "faBolt",
    heading: "Customer",
    title: "Customer Outstanding",
    iconColor: "#DD4B39",
    link: "/customers",
  },
];

export const CardItemFetching = (ItemsList, last = true) => {
  if (last) {
    return ItemsList.map((card) => {
      return (
        <div className="col-md my-1" key={card.title}>
          <DashboardCard
            icon={card.icon}
            heading={card.heading}
            title={card.title}
            iconColor={card.iconColor}
            link={card.link}
          />
        </div>
      );
    });
  } else {
    return ItemsList.map((card) => {
      return (
        <>
          <div className="col-md my-1" key={card.title}>
            <DashboardCard
              icon={card.icon}
              heading={card.heading}
              title={card.title}
              iconColor={card.iconColor}
              link={card.link}
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
