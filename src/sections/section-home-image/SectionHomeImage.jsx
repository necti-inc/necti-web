"use client";

import React, { useState } from "react";
import style from "./sectionhomeimage.module.css";
import Image from "next/image";
import theme from "@/app/theme";
import Link from "next/link";

function SectionHomeImage(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? theme.white : theme.primaryColor,
    color: isHovered ? theme.primaryColor : theme.white,
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div
      style={{ marginTop: props.topSpace, marginBottom: props.bottomSpace }}
      className={style.imageContainer}
    >
      <div className={style.overlayContent}>
        <h3 style={{ color: theme.white }} className={style.imageDescription}>
          {props.imageDescription}
        </h3>
        <Link href={"/contact"}>
          <button
            style={buttonStyle}
            className="buttonDark"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get in Touch
          </button>
        </Link>
      </div>
      <div className={style.imageShadow}></div>
      <Image src={props.imageElement} alt={"Image Element"} />
    </div>
  );
}

export default SectionHomeImage;
