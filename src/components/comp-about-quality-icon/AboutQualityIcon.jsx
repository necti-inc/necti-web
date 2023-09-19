import React from "react";
import style from "./aboutqualityicon.module.css";
import theme from "@/app/theme";

function AboutQualityIcon(props) {
  return (
    <div className={style.container}>
      <div className={style.iconContainer}>
        <div
          style={{ backgroundColor: theme.lightPrimaryColor }}
          className={style.iconContainerOuter}
        >
          <div
            style={{ backgroundColor: theme.mediumPrimaryColor }}
            className={style.iconContainerMiddle}
          >
            <div
              style={{ backgroundColor: theme.primaryColor }}
              className={style.iconContainerInner}
            >
              {props.icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutQualityIcon;
