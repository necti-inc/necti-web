"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from "./businessbar.module.css";

import React, { useState } from "react";
import theme from "@/app/theme";
import Link from "next/link";

function BusinessBarItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    color: isHovered ? theme.primaryColor : theme.darkGrey,
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <Link href={props.path}>
      <button
        className={style.containerItem}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h4 style={{ color: theme.primaryColor }} className={style.title}>
          {props.title}
        </h4>
        <div className={style.lowerContainer}>
          <p style={buttonStyle} className={style.lowerTitle}>
            {props.description}
          </p>
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            icon={faChevronRight}
            className={style.icon}
          />
        </div>
      </button>
    </Link>
  );
}

export default BusinessBarItem;
