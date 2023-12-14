import React from "react";
import style from "./sectionsolutionspackages.module.css";

function SolutionTile(props) {
  return (
    <button
      onClick={() => props.onPress(props.title)}
      onMouseEnter={props.mouseEnter}
      onMouseLeave={props.mouseLeave}
    >
      <div
        style={{
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
        }}
        className={style.tileContainer}
      >
        <p
          style={{ color: props.titleColor, fontWeight: props.fontWeight }}
          className={style.tileTitle}
        >
          {props.title}
        </p>
      </div>
    </button>
  );
}

export default SolutionTile;
