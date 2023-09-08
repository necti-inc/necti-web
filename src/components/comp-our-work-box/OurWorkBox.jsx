import React from "react";
import style from "./ourworkbox.module.css";
import theme from "@/app/theme";

function OurWorkBox(props) {
  return (
    <div
      style={{
        borderColor: theme.grey,
        transition: "border-color 0.3s", // Adding transition for smooth effect
        ":hover": { borderColor: "transparent" }, // Applying hover effect to remove border color
      }}
      className={style.container}
    >
      <div
        style={{ backgroundColor: theme.lightGrey }}
        className={style.imageContainer}
      >
        <div className={style.imageElement}></div>
      </div>
      <div
        style={{ borderColor: theme.white }}
        className={style.titleContainer}
      >
        <p className={style.name}>{props.businessName}</p>
        <p className={style.type} style={{ color: theme.darkGrey }}>
          {props.devType}
        </p>
      </div>
    </div>
  );
}

export default OurWorkBox;
