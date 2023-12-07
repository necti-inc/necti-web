"use client";

import React, { useState } from "react";
import style from "./compbutton.module.css";
import theme from "@/app/theme";

function CompButton(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => props.onPress(props.title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          backgroundColor: theme.white,
          borderColor: isHovered ? theme.primaryColor : props.activeColor,
        }}
        className={style.buttonContainer}
      >
        <p
          style={{
            fontWeight:
              props.activeColor === theme.primaryColor ? "600" : "normal",
          }}
        >
          {props.title}
        </p>
      </div>
    </button>
  );
}

export default CompButton;
