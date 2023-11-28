import React from "react";
import style from "./alacartebox.module.css";
import theme from "@/app/theme";
import Image from "next/image";
import Link from "next/link";

function AlacarteBox(props) {
  return (
    <Link href={"/contact"}>
      <div className={style.container}>
        <div className={style.imageElement}>
          <Image
            className={style.imageElement}
            src={props.image}
            alt={props.businessName}
          />
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
    </Link>
  );
}

export default AlacarteBox;
