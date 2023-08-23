import React from "react";
import style from "./learnmore.module.css";
import LearnMoreCard from "./LearnMoreCard";
import theme from "@/app/theme";

function LearnMore() {
  return (
    <div
      style={{ backgroundColor: theme.lightGrey }}
      className={style.container}
    >
      <LearnMoreCard
        title="Pricing"
        description="Tailored pricing for your unique business needs. Get the best value for your investment with our flexible pricing options."
      />
    </div>
  );
}

export default LearnMore;
