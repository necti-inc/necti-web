"use client";

import React, { useState } from "react";
import style from "./largetextinput.module.css";
import theme from "@/app/theme";

function LargeTextInput(props) {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <div className={style.container}>
      <label style={{ color: theme.black }} className={style.label}>
        {props.title}
      </label>
      <input
        style={{
          fontWeight: isTyping ? 600 : 400,
          borderColor: theme.grey,
          fontFamily: "inherit",
        }}
        className={style.input}
        id="firstName"
        type="text"
        placeholder={props.placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default LargeTextInput;
