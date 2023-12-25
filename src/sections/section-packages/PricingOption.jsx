import React from "react";
import style from "./packageoptions.module.css";
import Link from "next/link";

function PricingOption(props) {
  return (
    <div>
      <div className={style.outerContainerWeb}>
        <h2 className={style.optionTitle}>{props.optionTitle}</h2>
        <Link href={"/contact"} className={style.buttonContainer}>
          <button>
            <div
              style={{ backgroundColor: props.color }}
              className={style.priceContainer}
            >
              <h3
                style={{ color: props.textColor }}
                className={style.priceTitle}
              >
                Start Now
              </h3>
              <h3
                style={{ color: props.textColor }}
                className={style.priceTitle}
              >
                {props.price}
              </h3>
            </div>
          </button>
        </Link>
      </div>
      <div className={style.outerContainerMobile}>
        <button onClick={() => props.onPress(props.optionTitle)}>
          <div
            style={{
              backgroundColor: props.color,
              borderTopLeftRadius: props.borderRadius[0],
              borderTopRightRadius: props.borderRadius[1],
              borderBottomRightRadius: props.borderRadius[3],
              borderBottomLeftRadius: props.borderRadius[2],
              width: props.boxWidth,
            }}
            className={style.priceContainer}
          >
            <h3 style={{ color: props.textColor }} className={style.priceTitle}>
              {props.optionTitle}
            </h3>
            <h3 style={{ color: props.textColor }} className={style.priceTitle}>
              {props.price}
            </h3>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PricingOption;
