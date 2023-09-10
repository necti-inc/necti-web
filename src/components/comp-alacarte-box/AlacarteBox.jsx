import React from "react";
import style from "./alacartebox.module.css";
import theme from "@/app/theme";

function AlacarteBox(props) {
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
        style={{ backgroundColor: theme.black }}
        className={style.titleContainer}
      >
        <div className={style.titleContent}>
          <p style={{ color: theme.white }} className={style.name}>
            {props.businessName}
          </p>
          <p style={{ color: theme.white }} className={style.name}>
            {props.price}
          </p>
        </div>
        <p className={style.type} style={{ color: theme.darkGrey }}>
          {props.devType}
        </p>
      </div>
    </div>
  );
}

export default AlacarteBox;
