"use client";

import React, { useState, useEffect } from "react";
import style from "./largetextinput.module.css";
import theme from "@/app/theme";

function LargeTextInput(props) {
  const [inputValue, setInputValue] = useState(props.value || "");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
        id={props.title}
        type="text"
        placeholder={props.placeholder}
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
          props.onChange && props.onChange(e);
        }}
        required={props.required}
      />
    </div>
  );
}

export default LargeTextInput;
