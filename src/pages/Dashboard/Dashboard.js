import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import "./Dashboard.module.css";

import DashboardCard from "./DashboardComponent/DashboardCard";
import {
  Dashboard_Items_Fifth_Row,
  Dashboard_Items_First_Row,
  Dashboard_Items_Forth_Row,
  Dashboard_Items_Second_Row,
  Dashboard_Items_Third_Row,
} from "./DashboardComponent/DashboardItems";

const cardItemFetching = (ItemsList, last = true) => {
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
const Dashboard = (props) => {
  const firstRow = cardItemFetching(Dashboard_Items_First_Row, true);
  const secondRow = cardItemFetching(Dashboard_Items_Second_Row, true);
  const thirdRow = cardItemFetching(Dashboard_Items_Third_Row, true);
  const fourthRow = cardItemFetching(Dashboard_Items_Forth_Row, true);
  const fifthRow = cardItemFetching(Dashboard_Items_Fifth_Row, false);

  return (
    <>
      <div className="dashboard">
        <div className="d-flex content-align-center justify-content-between mx-3">
          <h5 className="h5">DAHSBOARD</h5>
          <div>
            <BreadcrumbBar />
          </div>
        </div>

        <div className="row">{firstRow}</div>
        <div className="row">{secondRow}</div>
        <div className="row">{thirdRow}</div>
        <div className="row">{fourthRow}</div>
        <div className="row">{fifthRow}</div>
      </div>
    </>
  );
};

export default Dashboard;
