import React from "react";
import style from "./moreinfo.module.css";
import theme from "@/app/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function MoreInfoCheckDown(props) {
  return (
    <div>
      <div className={style.topContainer}>
        <FontAwesomeIcon
          style={{ color: theme.primaryColor }}
          icon={faCircleCheck}
          className={style.textButtonIcon}
        />
        <h3 className={style.checkTitle}>{props.title}</h3>
      </div>
      <p style={{ color: theme.darkGrey }} className={style.checkDescription}>
        {props.description}
      </p>
    </div>
  );
}

export default MoreInfoCheckDown;
