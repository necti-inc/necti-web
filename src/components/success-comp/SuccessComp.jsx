"use client";

import React, { useState } from "react";
import style from "./successcomp.module.css";

function SuccessComp() {
  const [contentStyle, setContentStyle] = useState("state");
  const [descriptionStyle, setDescriptionStyle] = useState("test");

  function buttonClick(style) {
    setContentStyle("active-state");
    setDescriptionStyle("active-test");

    if (style == "active-state") {
      setContentStyle("state");
      setDescriptionStyle("test");
    }
  }

  return (
    <div>
      <div className={style.leftContainer}>
        <div>
          <button
            onClick={() => {
              buttonClick([contentStyle]);
            }}
          >
            <h4 className={style[contentStyle]}>Test</h4>
            <p className={style[descriptionStyle]}>
              al;skjdf;askjdf;laskjdf;asj
            </p>
          </button>
        </div>
      </div>
      <div className={style.rightContainer}></div>
    </div>
  );
}

export default SuccessComp;
