import React from "react";
import style from "./howitworks.module.css";
import theme from "../../app/theme.js";
import HowItWorksCard from "./HowItWorksCard";

function HowItWorks(props) {
  return (
    <div
      style={{ backgroundColor: theme.lightGrey }}
      className={style.container}
    >
      <div>
        <h2 style={{ color: theme.black }} className={style.solutionTitle}>
          How necti Works
        </h2>
        <p style={{ color: theme.black }} className={style.solutionSubTitle}>
          {props.title}
        </p>
      </div>
      <div className={style.howItWorksCardContainer}>
        {props.collection.map((item, index) => (
          <div key={index}>
            <HowItWorksCard title={item[0]} description={item[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
