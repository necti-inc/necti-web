import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from "./businessbar.module.css";

import React from "react";
import theme from "@/app/theme";
import Link from "next/link";

function BusinessBarItem(props) {
  return (
    <Link href={props.path}>
      <h4 className={style.title}>{props.title}</h4>
      <div className={style.lowerContainer}>
        <p style={{ color: theme.darkGrey }} className={style.lowerTitle}>
          {props.description}
        </p>
        <FontAwesomeIcon
          style={{ color: theme.primaryColor }}
          icon={faChevronRight}
          className={style.icon}
        />
      </div>
    </Link>
  );
}

export default BusinessBarItem;
