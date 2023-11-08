"use client";

import React, { useEffect, useState } from "react";
import style from "./smalltextinput.module.css";
import theme from "@/app/theme";

function SmallTextInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setInputValue(props.value);
    if (props.value === "reset") {
      setInputValue("");
      setIsTyping(false);
    }
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
      <label
        style={{ color: props.isValid ? theme.black : theme.error }}
        className={style.label}
      >
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
        type={props.type}
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

export default SmallTextInput;
