import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbBar from "../../components/Breadcumbs/BreadcrumbBar";
import "./Dashboard.module.css";

import DashboardCard from "./DashboardComponent/Utility/DashboardCard";
import {
  Dashboard_Items_Fifth_Row,
  Dashboard_Items_First_Row,
  Dashboard_Items_Forth_Row,
  Dashboard_Items_Second_Row,
  Dashboard_Items_Third_Row,
  CardItemFetching,
} from "./DashboardComponent/DashboardItems";

const Dashboard = (props) => {
  const firstRow = CardItemFetching(Dashboard_Items_First_Row, true);
  const secondRow = CardItemFetching(Dashboard_Items_Second_Row, true);
  const thirdRow = CardItemFetching(Dashboard_Items_Third_Row, true);
  const fourthRow = CardItemFetching(Dashboard_Items_Forth_Row, true);
  const fifthRow = CardItemFetching(Dashboard_Items_Fifth_Row, false);

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
