import React from "react";
import style from "./learnmore.module.css";
import theme from "../../app/theme.js";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function LearnMoreCard(props) {
  return (
    <div
      style={{ backgroundColor: theme.white }}
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
      <p
        style={{ color: theme.darkGrey }}
        className={style.solutionSubTitleCard}
      >
        {props.description}
      </p>
      {/* <Link
        style={{ color: theme.primaryColor }}
        className={style.textButton}
        href={props.path}
      >
        {props.title}
      </Link>
      <FontAwesomeIcon
        style={{ color: theme.primaryColor }}
        icon={faChevronRight}
        className={style.textButtonIcon}
      /> */}
    </div>
  );
}

export default LearnMoreCard;
