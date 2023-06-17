"use client";

import React, { useState, useEffect } from "react";
import style from "./ourwork.module.css";
import MiniNavItem from "./MiniNavItem";
import theme from "@/app/theme";
import OurWorkBox from "../our-work-box/OurWorkBox";
import ViewAllButton from "../view-all-button/ViewAllButton";

function OurWork() {
  const [activeColorWeb, setActiveColorWeb] = useState([
    theme.black,
    theme.primaryColor,
  ]);
  const [activeColorMobile, setActiveColorMobile] = useState([
    theme.grey,
    theme.white,
  ]);

  useEffect(() => {}, [activeColorWeb, activeColorMobile]);

  function buttonClick(title) {
    console.log(title);
    if (title === "Website") {
      setActiveColorWeb([theme.black, theme.primaryColor]);
      setActiveColorMobile([theme.grey, theme.white]);
    } else if (title === "Mobile") {
      setActiveColorMobile([theme.black, theme.primaryColor]);
      setActiveColorWeb([theme.grey, theme.white]);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.miniNav}>
        <MiniNavItem
          title="Website"
          onPress={buttonClick}
          textColor={activeColorWeb[0]}
          tabColor={activeColorWeb[1]}
        />
        <MiniNavItem
          title="Mobile"
          onPress={buttonClick}
          textColor={activeColorMobile[0]}
          tabColor={activeColorMobile[1]}
        />
      </div>
      <div className={style.ourWorkCardsContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <OurWorkBox devType="Web Development" businessName="pictureitmobile.com" />
          </div>
        ))}
      </div>
      <div className={style.lowerButtonContainer}>
        <ViewAllButton title="View all work" path="/work" />
      </div>
    </div>
  );
}

export default OurWork;
