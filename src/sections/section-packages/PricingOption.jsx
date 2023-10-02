import React from "react";
import style from "./packageoptions.module.css";
import theme from "@/app/theme";
import Link from "next/link";

function PricingOption(props) {
  return (
    <div className={style.outerContainer}>
      <h2 className={style.optionTitle}>{props.optionTitle}</h2>
      <Link href={"/contact"} className={style.buttonContainer}>
        <button>
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
        </button>
      </Link>
    </div>
  );
}

export default PricingOption;
