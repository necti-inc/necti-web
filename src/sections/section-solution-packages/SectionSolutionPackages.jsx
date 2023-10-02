"use client";

import React, { useState, useEffect } from "react";
import SolutionTile from "./SolutionTile";
import style from "./sectionsolutionspackages.module.css";
import theme from "@/app/theme";
import SectionPackages from "../section-packages/SectionPackages";

import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import SectionSolutionALaCarte from "../section-solution-alacarte/SectionSolutionALaCarte";
import HowItWorks from "../section-how-it-works/HowItWorks";

function SectionSolutionPackages() {
  const [isWebsiteHovered, setIsWebsiteHovered] = useState(false);
  const [isMarketingHovered, setIsMarketingHovered] = useState(false);
  const [isBusinessSetupHovered, setIsBusinessSetupHovered] = useState(false);
  const [isAutomationHovered, setIsAutomationHovered] = useState(false);
  const [isEComHovered, setIsEComHovered] = useState(false);

  const [activePackageList, setActivePackageList] = useState([
    ["Website Design", theme.lightGrey, faCheck],
    ["Website Development", theme.white, faCheck],
    ["Website Hosting", theme.lightGrey, faCheck],
    ["Website Maintenance", theme.white, faDollarSign],
    ["Website Analytics", theme.lightGrey, faDollarSign],
    ["Business Email Setup", theme.white, faDollarSign],
    ["Business Socials Setup", theme.lightGrey, faDollarSign],
  ]);

  const [activeSolutionList, setActiveSolutionList] = useState([
    ["SEO Optimization", "Web Development", "$35/mo"],
    ["Copywriting", "Web Development", "$100"],
    ["CRM Dashboard", "Web Development", "$35/mo"],
  ]);

  const [activeHowItWorksList, setActiveHowItWorksList] = useState([
    [
      "Design",
      "Choose from 100s of high quality themes. Or create your own unique theme.",
    ],
    ["Develop", "Once you have chosen a theme. We will begin development. "],
    [
      "Deploy",
      "Once development is complete you will be able to choose the best hosting plan for you.",
    ],
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
      setActiveSolutionList([
        ["SEO Optimization", "Web Development", "$35/mo"],
        ["Copywriting", "Web Development", "$100"],
        ["CRM Dashboard", "Web Development", "$35/mo"],
      ]);
      setActiveHowItWorksList([
        [
          "Design",
          "Choose from 100s of high quality themes. Or create your own unique theme.",
        ],
        [
          "Develop",
          "Once you have chosen a theme. We will begin development. ",
        ],
        [
          "Deploy",
          "Once development is complete you will be able to choose the best hosting plan for you.",
        ],
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
      setActiveSolutionList([
        ["SEO Optimization", "Web Development", "$35/mo"],
        ["Copywriting", "Web Development", "$100"],
        ["CRM Dashboard", "Web Development", "$35/mo"],
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
          titleColor={isWebsiteHovered ? theme.primaryColor : activeColorWeb[1]}
          borderColor={activeColorWeb[2]}
          fontWeight={activeColorWeb[3]}
          title="Website"
          mouseEnter={() => setIsWebsiteHovered(true)}
          mouseLeave={() => setIsWebsiteHovered(false)}
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorMarketing[0]}
          titleColor={
            isMarketingHovered ? theme.primaryColor : activeColorMarketing[1]
          }
          borderColor={activeColorMarketing[2]}
          fontWeight={activeColorMarketing[3]}
          title="Marketing"
          mouseEnter={() => setIsMarketingHovered(true)}
          mouseLeave={() => setIsMarketingHovered(false)}
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorBusinessSetup[0]}
          titleColor={
            isBusinessSetupHovered
              ? theme.primaryColor
              : activeColorBusinessSetup[1]
          }
          borderColor={activeColorBusinessSetup[2]}
          fontWeight={activeColorBusinessSetup[3]}
          title="Business Setup"
          mouseEnter={() => setIsBusinessSetupHovered(true)}
          mouseLeave={() => setIsBusinessSetupHovered(false)}
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorAutomation[0]}
          titleColor={
            isAutomationHovered ? theme.primaryColor : activeColorAutomation[1]
          }
          borderColor={activeColorAutomation[2]}
          fontWeight={activeColorAutomation[3]}
          title="Automation"
          mouseEnter={() => setIsAutomationHovered(true)}
          mouseLeave={() => setIsAutomationHovered(false)}
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorEcommerce[0]}
          titleColor={
            isEComHovered ? theme.primaryColor : activeColorEcommerce[1]
          }
          borderColor={activeColorEcommerce[2]}
          fontWeight={activeColorEcommerce[3]}
          title="E-Commerce"
          mouseEnter={() => setIsEComHovered(true)}
          mouseLeave={() => setIsEComHovered(false)}
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
      <SectionSolutionALaCarte solutions={activeSolutionList} />
      <HowItWorks title="Web-Development" collection={activeHowItWorksList} />
    </div>
  );
}

export default SectionSolutionPackages;
