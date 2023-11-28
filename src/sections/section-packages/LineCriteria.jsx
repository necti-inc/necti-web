import React from "react";
import style from "./packageoptions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import theme from "@/app/theme";

function LineCriteria(props) {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className={style.criteriaContainer}
    >
      <div className={style.innerCriteria}>
        <FontAwesomeIcon
          style={{ color: theme.primaryColor }}
          icon={faCircleQuestion}
          className={style.questionIcon}
        />
        <h3 className={style.criteriaTitle}>{props.title}</h3>
      </div>
      <div className={style.iconContainer}>
        {props.iconType === faDollarSign ? (
          <div>
            <FontAwesomeIcon
              style={{ color: theme.darkGrey }}
              icon={props.iconType}
              className={style.benefitsCheck}
            />
            <FontAwesomeIcon
              style={{ color: theme.darkGrey }}
              icon={props.iconType}
              className={style.benefitsCheck}
            />
          </div>
        ) : (
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            icon={props.iconType}
            className={style.benefitsCheck}
          />
        )}
      </div>
      <div className={style.iconContainer}>
        {props.iconTwoType === faDollarSign ? (
          <div>
            <FontAwesomeIcon
              style={{ color: theme.darkGrey }}
              icon={props.iconType}
              className={style.benefitsCheck}
            />
            <FontAwesomeIcon
              style={{ color: theme.darkGrey }}
              icon={props.iconType}
              className={style.benefitsCheck}
            />
          </div>
        ) : (
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            icon={props.iconTwoType}
            className={style.benefitsCheck}
          />
        )}
      </div>
      {props.optionThree != null ? (
        <div className={style.iconContainer}>
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            icon={faCheck}
            className={style.benefitsCheck}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LineCriteria;
