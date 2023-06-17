import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import style from "./viewallbutton.module.css";
import theme from "@/app/theme";

function ViewAllButton(props) {
  return (
    <div className={style.textButtonContainer}>
      <Link
        style={{ color: theme.primaryColor }}
        className={style.textButton}
        href={props.path}
      >
        {props.title}
      </Link>
      <FontAwesomeIcon
        style={{ color: theme.primaryColor }}
        icon={faArrowRightLong}
        className={style.textButtonIcon}
      />
    </div>
  );
}

export default ViewAllButton;
