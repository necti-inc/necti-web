"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import style from "./viewallbutton.module.css";
import theme from "@/app/theme";

function ViewAllButton(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    color: isHovered ? theme.black : theme.primaryColor,
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <Link className={style.textButton} href={props.path}>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.title}
      </button>
      <FontAwesomeIcon
        style={buttonStyle}
        icon={faArrowRightLong}
        className={style.textButtonIcon}
      />
    </Link>
  );
}

export default ViewAllButton;
