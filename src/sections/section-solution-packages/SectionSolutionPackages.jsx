"use client";

import React, { useState, useEffect } from "react";
import SolutionTile from "./SolutionTile";
import style from "./sectionsolutionspackages.module.css";
import theme from "@/app/theme";
import SectionPackages from "../section-packages/SectionPackages";

import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";

function SectionSolutionPackages() {
  const [activePackageList, setActivePackageList] = useState([
    ["Website Design", theme.lightGrey, faCheck],
    ["Website Development", theme.white, faCheck],
    ["Website Hosting", theme.lightGrey, faCheck],
    ["Website Maintenance", theme.white, faDollarSign],
    ["Website Analytics", theme.lightGrey, faDollarSign],
    ["Business Email Setup", theme.white, faDollarSign],
    ["Business Socials Setup", theme.lightGrey, faDollarSign],
  ]);
  const [activePriceOne, setActivePriceOne] = useState("$50/mo");
  const [activePriceTwo, setActivePriceTwo] = useState("$100/mo");

  const [activeColorWeb, setActiveColorWeb] = useState([
    theme.black,
    theme.primaryColor,
    theme.primaryColor,
    600,
  ]);
  const [activeColorMarketing, setActiveColorMarketing] = useState([
    theme.white,
    theme.black,
    theme.grey,
    500,
  ]);
  const [activeColorBusinessSetup, setActiveColorBusinessSetup] = useState([
    theme.white,
    theme.black,
    theme.grey,
    500,
  ]);
  const [activeColorAutomation, setActiveColorAutomation] = useState([
    theme.white,
    theme.black,
    theme.grey,
    500,
  ]);
  const [activeColorEcommerce, setActiveColorEcommerce] = useState([
    theme.white,
    theme.black,
    theme.grey,
    500,
  ]);

  useEffect(() => {}, [
    activeColorWeb,
    activeColorMarketing,
    activeColorBusinessSetup,
    activeColorAutomation,
    activeColorEcommerce,
  ]);

  function buttonClick(title) {
    if (title === "Website") {
      setActiveColorWeb([
        theme.black,
        theme.primaryColor,
        theme.primaryColor,
        600,
      ]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorBusinessSetup([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
      setActivePackageList([
        ["Website Design", theme.lightGrey, faCheck],
        ["Website Development", theme.white, faCheck],
        ["Website Hosting", theme.lightGrey, faCheck],
        ["Website Maintenance", theme.white, faDollarSign],
        ["Website Analytics", theme.lightGrey, faDollarSign],
        ["Business Email Setup", theme.white, faDollarSign],
        ["Business Socials Setup", theme.lightGrey, faDollarSign],
      ]);
      setActivePriceOne("$50/mo");
      setActivePriceTwo("$100/mo");
    } else if (title === "Marketing") {
      setActiveColorMarketing([
        theme.black,
        theme.primaryColor,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorBusinessSetup([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
      setActivePackageList([
        ["4 Posts & Caption Creation", theme.lightGrey, faCheck],
        ["8 Posts & Caption Creation", theme.white, faDollarSign],
        ["Post Scheduling", theme.lightGrey, faDollarSign],
        ["Hashtag Curation", theme.white, faDollarSign],
        ["Monthly Analytics Report", theme.lightGrey, faDollarSign],
        ["2 Story Posts", theme.white, faDollarSign],
      ]);
      setActivePriceOne("$150/mo");
      setActivePriceTwo("$300/mo");
    } else if (title === "Business Setup") {
      setActiveColorBusinessSetup([
        theme.black,
        theme.primaryColor,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
    } else if (title === "Automation") {
      setActiveColorAutomation([
        theme.black,
        theme.primaryColor,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorBusinessSetup([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
    } else if (title === "E-Commerce") {
      setActiveColorEcommerce([
        theme.black,
        theme.primaryColor,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorBusinessSetup([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
    }
  }
  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorWeb[0]}
          titleColor={activeColorWeb[1]}
          borderColor={activeColorWeb[2]}
          fontWeight={activeColorWeb[3]}
          title="Website"
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorMarketing[0]}
          titleColor={activeColorMarketing[1]}
          borderColor={activeColorMarketing[2]}
          fontWeight={activeColorMarketing[3]}
          title="Marketing"
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorBusinessSetup[0]}
          titleColor={activeColorBusinessSetup[1]}
          borderColor={activeColorBusinessSetup[2]}
          fontWeight={activeColorBusinessSetup[3]}
          title="Business Setup"
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorAutomation[0]}
          titleColor={activeColorAutomation[1]}
          borderColor={activeColorAutomation[2]}
          fontWeight={activeColorAutomation[3]}
          title="Automation"
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorEcommerce[0]}
          titleColor={activeColorEcommerce[1]}
          borderColor={activeColorEcommerce[2]}
          fontWeight={activeColorEcommerce[3]}
          title="E-Commerce"
        />
      </div>
      <div className={style.packageContainer}>
        <SectionPackages
          priceOne={activePriceOne}
          priceTwo={activePriceTwo}
          titleOne="Starter"
          titleTwo="Premium"
          packages={activePackageList}
          buttonText="Contact us today"
        />
      </div>
    </div>
  );
}

export default SectionSolutionPackages;