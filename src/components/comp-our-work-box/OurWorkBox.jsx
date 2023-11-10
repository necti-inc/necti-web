import React from "react";
import style from "./ourworkbox.module.css";
import theme from "@/app/theme";
import Image from "next/image";

function OurWorkBox(props) {
  return (
    <div
      style={{
        borderColor: theme.grey,
        transition: "border-color 0.3s",
        ":hover": { borderColor: "transparent" },
      }}
      className={style.container}
    >
      <a href={props.route} target="_blank">
        <div className={style.imageContainer}>
          <Image
            className={style.imageElement}
            src={props.image}
            alt={props.businessName}
          />
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
      </a>
    </div>
  );
}

export default OurWorkBox;
