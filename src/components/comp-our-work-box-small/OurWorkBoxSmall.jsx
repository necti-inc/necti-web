import React from "react";
import style from "./ourworkboxsmall.module.css";
import theme from "@/app/theme";

function OurWorkBoxSmall(props) {
  return (
    <div
      style={{
        backgroundColor: theme.black,
      }}
      className={style.container}
    >
      <a href={props.path} target="_blank">
        <div
          style={{ backgroundColor: theme.white }}
          className={style.imageContainer}
        >
          <div className={style.imageElement}></div>
        </div>
        <div className={style.titleContainer}>
          <p className={style.name} style={{ color: theme.white }}>
            {props.businessName}
          </p>
          <p className={style.type} style={{ color: theme.darkGrey }}>
            {props.devType}
          </p>
        </div>
      </a>
    </div>
  );
}

export default OurWorkBoxSmall;
