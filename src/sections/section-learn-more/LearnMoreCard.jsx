import React from "react";
import style from "./learnmore.module.css";
import theme from "../../app/theme.js";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function LearnMoreCard(props) {
  return (
    <div
      style={{ backgroundColor: theme.white, borderColor: theme.grey }}
      className={style.cardContainer}
    >
      <Link className={style.textButton} href={props.path}>
        <FontAwesomeIcon
          style={{ color: theme.black }}
          icon={props.iconName}
          className={style.icon}
        />
        <h2 style={{ color: theme.black }} className={style.solutionTitleCard}>
          {props.title}
        </h2>
        <p
          style={{ color: theme.darkGrey }}
          className={style.solutionSubTitleCard}
        >
          {props.description}
        </p>
        <div className={style.lowerButtonContainer}>
          <p className={style.lowerButton}>{props.lowerButton}</p>
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            icon={faChevronRight}
            className={style.iconBottom}
          />
        </div>
      </Link>
    </div>
  );
}

export default LearnMoreCard;
