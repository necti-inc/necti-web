import React from "react";
import style from "./solutions.module.css";
import theme from "@/app/theme";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";
import SolutionBox from "@/components/comp-solution-box/SolutionBox";

import googleIcon from "../../../public/icons/google-icon.png";
import shopifyIcon from "../../../public/icons/shopify-icon.png";
import nextjsIcon from "../../../public/icons/nextjs-icon.png";
import nextdoorIcon from "../../../public/icons/nextdoor-icon.png";
import facebookIcon from "../../../public/icons/facebook-icon.png";
import instagramIcon from "../../../public/icons/instagram-icon.png";
import reactIcon from "../../../public/icons/react-icon.png";
import yelpIcon from "../../../public/icons/yelp-icon.png";
import htmlIcon from "../../../public/icons/html-icon.png";


const solutionsImage = [
  googleIcon,
  shopifyIcon,
  reactIcon,
  nextjsIcon,
  htmlIcon,
  nextdoorIcon,
  yelpIcon,
  instagramIcon,
  facebookIcon,
];

function Solutions() {
  return (
    <div
      style={{ backgroundColor: theme.lightGrey }}
      className={style.solutionContainer}
    >
      <div className={style.leftItem}>
        <button
          style={{ color: theme.black, borderColor: theme.black }}
          className="buttonSlim"
        >
          100+ Solutions
        </button>
        <h2 style={{ color: theme.black }} className={style.solutionTitle}>
          Digital solutions that drive website traffic and help your business
          succeed
        </h2>
        <p style={{ color: theme.black }} className={style.solutionSubTitle}>
          Unlock your online potential with expert SEO and marketing solutions.
          Drive qualified traffic to your site and boost your companies
          visibility.
        </p>
        <ViewAllButton title="View all solutions" path="/solutions" />
      </div>
      <div className={style.rightItem}>
        {solutionsImage.map((image, index) => (
          <div key={index}>
            <SolutionBox image={image} path={"/solutions"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
