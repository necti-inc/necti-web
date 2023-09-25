"use client";

import React, { useState, useEffect } from "react";
import theme from "@/app/theme";
import style from "./ourworkheader.module.css";
import CompButton from "@/sections/section-our-work-header/comp-button/CompButton";
import OurWorkBody from "@/sections/section-our-work-body/OurWorkBody";
import OurWorkBoxSmall from "@/components/comp-our-work-box-small/OurWorkBoxSmall";

function OurWorkHeader() {
  function buttonClick(title) {
    if (title === "Websites") {
      setWebsiteOption(["Websites", 3, true]);
      setMarketingOption(["Content Creation", 1, false]);
      setCommerceOption(["Ecommerce", 1, false]);
    } else if (title === "Content Creation") {
      setWebsiteOption(["Websites", 1, true]);
      setMarketingOption(["Content Creation", 3, false]);
      setCommerceOption(["Ecommerce", 1, false]);
    } else if (title === "Ecommerce") {
      setWebsiteOption(["Websites", 1, true]);
      setMarketingOption(["Content Creation", 1, false]);
      setCommerceOption(["Ecommerce", 3, false]);
    }
  }
  const [activeWork, setActiveWork] = useState([
    ["https://www.premierikon.com", "Premier Ikon", "Website Development"],
    ["https://www.premierikon.com", "Premier Ikon", "Website Development"],
    ["https://www.premierikon.com", "Premier Ikon", "Website Development"],
    ["https://www.premierikon.com", "Premier Ikon", "Website Development"],
    ["https://www.premierikon.com", "Premier Ikon", "Website Development"],
  ]);

  const [websiteOption, setWebsiteOption] = useState(["Websites", 3, true]);
  const [marketingOption, setMarketingOption] = useState([
    "Content Creation",
    1,
    false,
  ]);
  const [commerceOption, setCommerceOption] = useState(["Ecommerce", 1, false]);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme.white,
          backgroundImage: 'url("/portfolio-header-background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "530px",
        }}
      >
        <div className={style.headerContainer}>
          <h2 className={style.header}>
            100’s of customers, to showcase our
            <br /> dynamic approach to web development.
          </h2>
          <p style={{ color: theme.darkGrey }} className={style.description}>
            Join a growing family of 105 satisfied customers and business owners
            around the world.
          </p>
        </div>
        <div className={style.buttonContainer}>
          <CompButton
            title={websiteOption[0]}
            borderWidth={websiteOption[1]}
            onPress={buttonClick}
          />
          <div className={style.spacer} />
          <CompButton
            title={marketingOption[0]}
            borderWidth={marketingOption[1]}
            onPress={buttonClick}
          />
          <div className={style.spacer} />
          <CompButton
            title={commerceOption[0]}
            borderWidth={commerceOption[1]}
            onPress={buttonClick}
          />
        </div>
      </div>
      <div>
        <OurWorkBody work={activeWork} />
      </div>
    </div>
  );
}

export default OurWorkHeader;
