import React from "react";
import style from "./ourwork.module.css";
import theme from "@/app/theme";
import OurWorkItems from "./OurWorkItems";

function OurWork() {
  return (
    <div className={style.ourWorkContainer}>
      <h2 style={{ color: theme.black }} className={style.ourWorkHeader}>
        Our Work
      </h2>
      <OurWorkItems />
    </div>
  );
}

export default OurWork;
