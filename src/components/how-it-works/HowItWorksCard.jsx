import React from "react";
import style from "./howitworks.module.css";
import theme from "../../app/theme.js";

function HowItWorksCard(props) {
  return (
    <div style={{backgroundColor: theme.lightGrey}} className={style.cardContainer}>
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
