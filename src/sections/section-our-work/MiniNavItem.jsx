import React from "react";
import styles from "./ourwork.module.css";

function MiniNavItem(props) {
  return (
    <button onClick={() => props.onPress(props.title)}>
      <p style={{ color: props.textColor }} className={styles.title}>{props.title}</p>
      <div
        style={{ backgroundColor: props.tabColor }}
        className={styles.bottomBar}
      />
    </button>
  );
}

export default MiniNavItem;
