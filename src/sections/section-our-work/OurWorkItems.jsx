"use client";

import React, { useState, useEffect } from "react";
import style from "./ourwork.module.css";
import MiniNavItem from "./MiniNavItem";
import theme from "@/app/theme";
import OurWorkBox from "@/components/comp-our-work-box/OurWorkBox";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";

function OurWorkItems(props) {
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
      <h2 style={{ color: theme.black }} className={style.ourWorkHeader}>
        Our Work
      </h2>
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
        {props.work.map((item, index) => (
          <div key={index}>
            <OurWorkBox
              devType={item[0]}
              businessName={item[1]}
              route={item[2]}
              image={item[3]}
            />
          </div>
        ))}
      </div>
      <div className={style.lowerButtonContainer}>
        <ViewAllButton title="View all work" path="/work" />
      </div>
    </div>
  );
}

export default OurWorkItems;
