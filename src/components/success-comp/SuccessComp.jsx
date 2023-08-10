"use client";

import React, { useState } from "react";
import style from "./successcomp.module.css";
import theme from "../../app/theme";

function SuccessComp() {
  const [activeState, setActiveState] = useState(0);
  const [contentStyle, setContentStyle] = useState("header-state");
  const [descriptionStyle, setDescriptionStyle] = useState("description-state");

  function buttonClick(style) {
    setContentStyle("active-header-state");
    setDescriptionStyle("active-description-state");

    if (style == "active-header-state") {
      setContentStyle("header-state");
      setDescriptionStyle("description-state");
    }
  }

  const buttonContents = [
    {
      header: "Solutions",
      description:
        "We understand that every business is unique, and thats why we offer customized solutions tailored to your specific needs. Our team of experts will work closely with you to understand your business goals and design a solution that effectively represents your business.",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <button
          onClick={() => {
            buttonClick([contentStyle]);
          }}
          className={style.contentContainer}
          style={{
            borderColor:
              contentStyle == "active-header-state"
                ? theme.primaryColor
                : theme.grey,
          }}
        >
          <h4 style={{ color: theme.black }} className={style[contentStyle]}>
            Solutions
          </h4>
          <p
            style={{ color: theme.darkGrey }}
            className={style[descriptionStyle]}
          >
            We understand that every business is unique, and thats why we offer
            customized solutions tailored to your specific needs. Our team of
            experts will work closely with you to understand your business goals
            and design a solution that effectively represents your business
          </p>
        </button>
        <button
          onClick={() => {
            buttonClick([contentStyle]);
          }}
          className={style.contentContainer}
          style={{
            borderColor:
              contentStyle == "active-header-state"
                ? theme.primaryColor
                : theme.grey,
          }}
        >
          <h4 style={{ color: theme.black }} className={style[contentStyle]}>
            Solutions
          </h4>
          <p
            style={{ color: theme.darkGrey }}
            className={style[descriptionStyle]}
          >
            We understand that every business is unique, and thats why we offer
            customized solutions tailored to your specific needs. Our team of
            experts will work closely with you to understand your business goals
            and design a solution that effectively represents your business
          </p>
        </button>
      </div>
      <div className={style.rightContainer}></div>
    </div>
  );
}

export default SuccessComp;
