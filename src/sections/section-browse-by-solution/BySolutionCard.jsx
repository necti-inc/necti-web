import React from "react";
import style from "./browsebysolution.module.css";
import theme from "../../app/theme.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BySolutionCard(props) {
  return (
    <div
      className={style.cardContainer}
      style={{ backgroundColor: theme.lightGrey }}
    >
      <Link href={props.path}>
        <h3 className={style.cardTitle}>{props.title}</h3>
        <p style={{ color: theme.darkGrey }} className={style.cardDescription}>
          {props.description}
        </p>
        <div className={style.lowerButtonContainer}>
          <p className={style.lowerButton}>Learn More</p>
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

export default BySolutionCard;
