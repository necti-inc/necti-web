import React from "react";
import style from "./packageoptions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import theme from "@/app/theme";

function LineCriteriaHeader(props) {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className={style.criteriaHeaderContainer}
    >
      <div className={style.innerHeaderCriteria}>
        <h3 className={style.criteriaHeaderTitle}>Top Features</h3>
      </div>
      <div className={style.iconContainer}>
        <h3
          style={{ color: theme.darkGrey }}
          className={style.criteriaSubHeaderTitle}
        >
          {props.descriptionOne}
        </h3>
      </div>
      <div className={style.iconContainer}>
        <h3
          style={{ color: theme.darkGrey }}
          className={style.criteriaSubHeaderTitle}
        >
          {props.descriptionTwo}
        </h3>
      </div>
      {props.optionThree != null ? (
        <div className={style.iconContainer}>
          <h3
            style={{ color: theme.darkGrey }}
            className={style.criteriaSubHeaderTitle}
          >
            {props.descriptionThree}
          </h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LineCriteriaHeader;
