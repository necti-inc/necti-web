import React from "react";
import style from "@/sections/section-contact-form/sectioncontactform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "@/app/theme";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function IconBox(props) {
  return (
    <div className={style.iconBox}>
      <div>
        <FontAwesomeIcon
          style={{ color: theme.darkGrey }}
          className={style.icon}
          icon={faCheck}
        />
      </div>
      <p className={style.subText}>{props.text}</p>
    </div>
  );
}

export default IconBox;
