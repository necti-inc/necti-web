import React from "react";
import style from "./packageoptions.module.css";
import theme from "@/app/theme";


function PricingOption(props) {
  return (
    <div className={style.outerContainer}>
      <h2 className={style.optionTitle}>{props.optionTitle}</h2>
      <div
        style={{ backgroundColor: props.color }}
        className={style.priceContainer}
      >
        <h3 style={{ color: props.textColor }} className={style.priceTitle}>
          Start Now
        </h3>
        <h3 style={{ color: props.textColor }} className={style.priceTitle}>
          {props.price}
        </h3>
      </div>
    </div>
  );
}

export default PricingOption;
