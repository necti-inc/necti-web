"use client";

import React, { useState, useEffect } from "react";
import theme from "@/app/theme";
import style from "./ourworkheader.module.css";
import CompButton from "@/sections/section-our-work-header/comp-button/CompButton";
import OurWorkBody from "@/sections/section-our-work-body/OurWorkBody";
import OurWorkBoxSmall from "@/components/comp-our-work-box-small/OurWorkBoxSmall";

import PictureItMobile from "../../../public/customer-picture-it-mobile.png";
import ImpactPestPros from "../../../public/customer-impact-pest-pros.png";
import PremierIkon from "../../../public/customer-premierikon.png";
import LegendsMedia from "../../../public/customer-legends-media.png";
import KKFit from "../../../public/customer-kkfit.png";
import Hartford from "../../../public/customer-hartford.png";

function OurWorkHeader() {
  function buttonClick(title) {
    if (title === "Websites") {
      setWebsiteOption([
        "Websites",
        theme.primaryColor,
        theme.primaryColor,
        true,
      ]);
      setMarketingOption(["Content Creation", theme.grey, theme.black, false]);
      setCommerceOption(["Ecommerce", theme.grey, theme.black, false]);
    } else if (title === "Content Creation") {
      setWebsiteOption(["Websites", theme.grey, theme.black, true]);
      setMarketingOption([
        "Content Creation",
        theme.primaryColor,
        theme.primaryColor,
        false,
      ]);
      setCommerceOption(["Ecommerce", theme.grey, theme.black, false]);
    } else if (title === "Ecommerce") {
      setWebsiteOption(["Websites", theme.grey, theme.black, true]);
      setMarketingOption(["Content Creation", theme.grey, theme.black, false]);
      setCommerceOption([
        "Ecommerce",
        theme.primaryColor,
        theme.primaryColor,
        false,
      ]);
    }
  }

  const activeWork = [
    [
      "Web Development",
      "pictureitmobile.com",
      "https://www.pictureitmobile.com",
      PictureItMobile,
    ],
    [
      "Web Development",
      "impactpestpros.com",
      "https://www.impactpestpros.com",
      ImpactPestPros,
    ],
    [
      "Web Development",
      "premierikon.com",
      "https://www.premierikon.com",
      PremierIkon,
    ],
    [
      "Web Development",
      "legends.media",
      "https://www.legends.media",
      LegendsMedia,
    ],
    ["Web Development", "shop.kkfit.com", "https://www.shop.kkfit.com", KKFit],
    [
      "Web Development",
      "hartfordltd.com",
      "https://www.hartfordltd.com",
      Hartford,
    ],
  ];

  const [websiteOption, setWebsiteOption] = useState([
    "Websites",
    theme.primaryColor,
    theme.primaryColor,
    true,
  ]);
  const [marketingOption, setMarketingOption] = useState([
    "Content Creation",
    theme.grey,
    theme.black,
    false,
  ]);
  const [commerceOption, setCommerceOption] = useState([
    "Ecommerce",
    theme.grey,
    theme.black,
    false,
  ]);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme.white,
          backgroundImage: 'url("/portfolio-header-background.png")',
          backgroundSize: "cover",
        }}
        className={style.headerImage}
      >
        <div className={style.headerContainer}>
          <h2 className={style.header}>
            100’s of customers, to showcase our
            <br /> dynamic approach to business development.
          </h2>
          <p style={{ color: theme.darkGrey }} className={style.description}>
            Join a growing family of 100+ satisfied customers and business
            owners around the world.
          </p>
        </div>
        {/*<div className={style.buttonContainer}>*/}
        {/*  <CompButton*/}
        {/*    title={websiteOption[0]}*/}
        {/*    activeColor={websiteOption[1]}*/}
        {/*    hoverColor={websiteOption[2]}*/}
        {/*    onPress={buttonClick}*/}
        {/*  />*/}
        {/*  <div className={style.spacer} />*/}
        {/*  <CompButton*/}
        {/*    title={marketingOption[0]}*/}
        {/*    activeColor={marketingOption[1]}*/}
        {/*    hoverColor={marketingOption[2]}*/}
        {/*    onPress={buttonClick}*/}
        {/*  />*/}
        {/*  <div className={style.spacer} />*/}
        {/*  <CompButton*/}
        {/*    title={commerceOption[0]}*/}
        {/*    activeColor={commerceOption[1]}*/}
        {/*    hoverColor={commerceOption[2]}*/}
        {/*    onPress={buttonClick}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
      <div>
        <OurWorkBody work={activeWork} />
      </div>
    </div>
  );
}

export default OurWorkHeader;
