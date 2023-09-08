import React from "react";
import style from "./learnmore.module.css";
import LearnMoreCard from "./LearnMoreCard";
import {
  faDollar,
  faSliders,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import theme from "@/app/theme";

function LearnMore() {
  return (
    <div
      style={{
        backgroundColor: theme.lightGrey,
        backgroundImage: 'url("/learn-more-background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className={style.container}
    >
      <LearnMoreCard
        title="Pricing"
        description="Tailored pricing for your unique business needs. Get the best value for your investment with our flexible pricing options."
        lowerButton="Learn More"
        path="/solutions"
        iconName={faDollar}
      />
      <LearnMoreCard
        title="Solutions"
        description="Our expert team offers a wide range of web development services to help your business succeed online."
        lowerButton="Discover Solutions"
        path="/solutions"
        iconName={faSliders}
      />
      <LearnMoreCard
        title="About Us"
        description="We're more than just a web development company - we're a team of passionate professionals who are dedicated to delivering high-quality results."
        lowerButton="Our Story"
        path="/about"
        iconName={faSitemap}
      />
    </div>
  );
}

export default LearnMore;
