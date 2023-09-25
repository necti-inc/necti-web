import React from "react";
import style from "./compbutton.module.css";
import theme from "@/app/theme";

function CompButton(props) {
  return (
    <button onClick={() => props.onPress(props.title)}>
      <div
        style={{
          backgroundColor: theme.white,
          borderColor: theme.black,
          borderWidth: props.borderWidth,
        }}
        className={style.buttonContainer}
      >
        <p>{props.title}</p>
      </div>
    </button>
  );
}

export default CompButton;
