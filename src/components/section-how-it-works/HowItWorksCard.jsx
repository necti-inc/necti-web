import React from "react";
import style from "./howitworks.module.css";
import theme from "../../app/theme.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

function HowItWorksCard(props) {
  return (
    <div
      style={{ backgroundColor: theme.lightGrey }}
      className={style.cardContainer}
    >
      <FontAwesomeIcon
        style={{ color: theme.primaryColor }}
        icon={faFolder}
        className={style.icon}
      />
      <h2 style={{ color: theme.black }} className={style.solutionTitleCard}>
        {props.title}
      </h2>
      <p style={{ color: theme.black }} className={style.solutionSubTitleCard}>
        {props.description}
      </p>
    </div>
  );
}

export default HowItWorksCard;
