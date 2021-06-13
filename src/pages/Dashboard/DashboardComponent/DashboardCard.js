import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBook,
  faCartPlus,
  faEdit,
  faListAlt,
  faTags,
  faThLarge,
  faTruck,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

let icon;
const findIcon = (icon) => {
  if (icon === "faUser") {
    return faUser;
  } else if (icon === "faUser") {
    return faUser;
  } else if (icon === "faBolt") {
    return faBolt;
  } else if (icon === "faBook") {
    return faBook;
  } else if (icon === "faCartPlus") {
    return faCartPlus;
  } else if (icon === "faEdit") {
    return faEdit;
  } else if (icon === "faListAlt") {
    return faListAlt;
  } else if (icon === "faTags") {
    return faTags;
  } else if (icon === "faThLarge") {
    return faThLarge;
  } else if (icon === "faTruck") {
    return faTruck;
  } else if (icon === "faUsers") {
    return faUsers;
  }
};

const DashboardCard = (props) => {
  icon = findIcon(props.icon);
  return (
    <div
      className={`d-flex align-items-center rounded mx-3 border`}
      style={{ height: 100, overflow: "hidden", background: "#ecf0f5" }}
    >
      <div
        style={{ height: 100, width: 100, background: props.iconColor }}
        className={`d-flex align-items-center justify-content-center `}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: 40, color: "#ecf0f5" }}
        />
      </div>
      <div className="d-flex flex-column">
        <p style={{ fontSize: 13 }} className="mx-3 my-0 text-uppercase">
          {props.heading}
        </p>
        <p style={{ fontWeight: "bold" }} className="mx-3">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
