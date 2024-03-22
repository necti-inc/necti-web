"use client";

import React, { useState, useEffect } from "react";
import SolutionTile from "./SolutionTile";
import style from "./sectionsolutionspackages.module.css";
import theme from "@/app/theme";
import SectionPackages from "../section-packages/SectionPackages";

import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import SectionSolutionALaCarte from "../section-solution-alacarte/SectionSolutionALaCarte";
import HowItWorks from "../section-how-it-works/HowItWorks";

import CarteSEO from "../../../public/web-carte-seo.png";
import CarteCopy from "../../../public/web-carte-copy.png";
import CarteChanges from "../../../public/web-carte-changes.png";
import CartePost from "../../../public/marketing-carte-additional-post.png";
import CarteStory from "../../../public/marketing-carte-story-post.png";
import CarteFacebookAd from "../../../public/marketing-carte-facebook-ad.png";
import CarteInstagramBoost from "../../../public/marketing-carte-instagram.png";
import CarteFacebookGroupPost from "../../../public/marketing-carte-group-post.png";

function SectionSolutionPackages() {
  const [isWebsiteHovered, setIsWebsiteHovered] = useState(false);
  const [isMarketingHovered, setIsMarketingHovered] = useState(false);
  const [isAutomationHovered, setIsAutomationHovered] = useState(false);
  const [isEComHovered, setIsEComHovered] = useState(false);

  const [activePackageList, setActivePackageList] = useState([
    ["Website Design", theme.lightGrey, faCheck, faCheck],
    ["Website Development", theme.white, faCheck, faCheck],
    ["Domain Transfer", theme.lightGrey, faCheck, faCheck],
    ["1-2 Page Website", theme.white, faCheck, faCheck],
    ["1-6 Page Website", theme.lightGrey, faDollarSign, faCheck],
    // ["Customer Portal", theme.white, faDollarSign, faCheck],
    // [
    //   "4-6 Website Changes Per Month",
    //   theme.lightGrey,
    //   faDollarSign,
    //   faDollarSign,
    // ],
    // ["Website Analytics", theme.white, faDollarSign, faDollarSign],
    // ["1 Blog Post Per Month", theme.lightGrey, faDollarSign, faDollarSign],
  ]);

  const [activeSolutionList, setActiveSolutionList] = useState([
    ["SEO Optimization", "Web Development", "$35+/mo", CarteSEO],
    ["Copy-writing", "Web Development", "$100+", CarteCopy],
    ["Website Changes", "Web Development", "$400+", CarteChanges],
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

  const [activeHowItWorksTitle, setActiveHowItWorksTitle] =
    useState("Web-Development");

  const [activePriceOne, setActivePriceOne] = useState("$850+");
  const [activePriceTwo, setActivePriceTwo] = useState("$1250+");
  const [activePriceThree, setActivePriceThree] = useState(null);

  const [activeTitleOne, setActiveTitleOne] = useState("Starter");
  const [activeTitleTwo, setActiveTitleTwo] = useState("Premium");
  const [activeTitleThree, setActiveTitleThree] = useState(null);

  const [activeDescriptionOne, setActiveDescriptionOne] = useState(null);
  const [activeDescriptionTwo, setActiveDescriptionTwo] = useState(null);
  const [activeDescriptionThree, setActiveDescriptionThree] = useState(null);

  const [activeColorWeb, setActiveColorWeb] = useState([
    theme.primaryColor,
    theme.lightGrey,
    theme.primaryColor,
    600,
  ]);
  const [activeColorMarketing, setActiveColorMarketing] = useState([
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
    activeColorAutomation,
    activeColorEcommerce,
  ]);

  function buttonClick(title) {
    if (title === "Custom Website") {
      setActiveColorWeb([
        theme.primaryColor,
        theme.lightGrey,
        theme.primaryColor,
        600,
      ]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
      setActivePackageList([
        ["Website Design", theme.lightGrey, faCheck, faCheck],
        ["Website Development", theme.white, faCheck, faCheck],
        ["Domain Transfer", theme.lightGrey, faCheck, faCheck],
        ["1-2 Page Website", theme.white, faCheck, faCheck],
        ["1-6 Page Website", theme.lightGrey, faDollarSign, faCheck],
        // ["Customer Portal", theme.white, faDollarSign, faCheck],
        // [
        //   "4-6 Website Changes Per Month",
        //   theme.lightGrey,
        //   faDollarSign,
        //   faDollarSign,
        // ],
        // ["Monthly Website Analytics", theme.white, faDollarSign, faDollarSign],
        // ["1 Blog Post Per Month", theme.lightGrey, faDollarSign, faDollarSign],
      ]);
      // setActiveSolutionList([
      //   ["SEO Optimization", "Web Development", "$35+/mo", CarteSEO],
      //   ["Copy-writing", "Web Development", "$100+", CarteCopy],
      //   ["Website Changes", "Web Development", "$400+", CarteChanges],
      // ]);
      setActiveHowItWorksTitle("Web-Development");
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
      setActivePriceOne("$850+");
      setActivePriceTwo("$1250+");
      setActivePriceThree(null);
      setActiveTitleOne("Starter")
      setActiveTitleTwo("Premium");
      setActiveTitleThree(null);
      // setActiveDescriptionOne("Forms in about 2 to 4 weeks *");
      // setActiveDescriptionTwo("Forms in about 1 to 2 weeks *");
      // setActiveDescriptionThree("Forms in about 4 to 6 days * ");
    } else if (title === "Website Hosting") {
      setActiveColorMarketing([
        theme.primaryColor,
        theme.lightGrey,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
      setActivePackageList([
        ["HTTPS Security", theme.lightGrey, faCheck, faCheck],
        ["Fast Globally (Edge Network)", theme.white, faCheck, faCheck],
        ["1TB Bandwidth", theme.lightGrey, faCheck, faCheck],
        ["Data Cache", theme.white, faCheck, faCheck],
        ["Email Support", theme.lightGrey, faCheck, faCheck],
      ]);
      // setActiveSolutionList([
      //   ["Additional Post", "Marketing Solution", "$25+", CartePost],
      //   ["Story Post", "Marketing Solution", "$20+", CarteStory],
      //   ["Facebook Ad Setup", "Marketing Solution", "$75+", CarteFacebookAd],
      //   [
      //     "Instagram Boost Setup",
      //     "Marketing Solution",
      //     "$25+",
      //     CarteInstagramBoost,
      //   ],
      //   [
      //     "Facebook Group Post",
      //     "Marketing Solution",
      //     "$50+",
      //     CarteFacebookGroupPost,
      //   ],
      // ]);
      setActiveHowItWorksTitle("Website Hosting");
      setActiveHowItWorksList([
        [
          "Security",
          "Ensure secure connections with HTTPS, protecting your website and user data.",
        ],
        [
          "Data Cache",
          "Improve load times and reduce server load with effective data caching strategies.",
        ],
        [
          "Email Support",
          "Get dedicated email support for any hosting-related queries or issues.",
        ],
      ]);
      setActivePriceOne("$14.99/mo");
      setActivePriceTwo("$120/yr");
      setActivePriceThree(null);
      setActiveTitleOne("Monthly")
      setActiveTitleTwo("Annually");
      setActiveTitleThree(null);
      setActiveDescriptionOne(null);
      setActiveDescriptionTwo(null);
      setActiveDescriptionThree(null);
    } else if (title === "Automation") {
      setActiveColorAutomation([
        theme.primaryColor,
        theme.lightGrey,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorEcommerce([theme.white, theme.black, theme.grey, 500]);
      setActivePackageList([
        ["Software/Automation Development", theme.lightGrey, faCheck, faCheck],
        [
          "Software/Automation Maintenance ",
          theme.white,
          faDollarSign,
          faCheck,
        ],
      ]);
      setActiveHowItWorksTitle("Automation");
      setActiveHowItWorksList([
        [
          "Analyze",
          "Review insights and analytics on issue at hand, helping develop the best solution.",
        ],
        [
          "Develop",
          "Develop an automation for you business needs, ensuring customer satisfaction.",
        ],
        [
          "Integrate",
          "Integrate new business automation in order to streamline business needs.",
        ],
      ]);
      setActivePriceOne("$2,000+");
      setActivePriceTwo("$4,000+");
      setActiveTitleThree(null);
      setActivePriceThree(null);
      setActiveTitleOne("Starter")
      setActiveTitleTwo("Premium");
      setActiveDescriptionOne(null);
      setActiveDescriptionTwo(null);
      setActiveDescriptionThree(null);
      setActiveSolutionList(null);
    } else if (title === "E-Commerce") {
      setActiveColorEcommerce([
        theme.primaryColor,
        theme.lightGrey,
        theme.primaryColor,
        600,
      ]);
      setActiveColorWeb([theme.white, theme.black, theme.grey, 500]);
      setActiveColorMarketing([theme.white, theme.black, theme.grey, 500]);
      setActiveColorAutomation([theme.white, theme.black, theme.grey, 500]);
      setActivePackageList([
        ["Custom Shopify Theme Development", theme.lightGrey, faCheck, faCheck],
        [
          "Custom Shopify Theme Maintenance",
          theme.white,
          faDollarSign,
          faCheck,
        ],
        [
          "Custom Shopify Theme Knowledge Transfer",
          theme.lightGrey,
          faDollarSign,
          faCheck,
        ],
      ]);
      setActiveHowItWorksTitle("E-Commerce");
      setActiveHowItWorksList([
        [
          "Design",
          "Work with our team to make a unique shopify theme for you business.",
        ],
        [
          "Develop",
          "Once the design is finalized, our team will begin developing your dream site.",
        ],
        [
          "Deploy",
          "Once development is complete you will be able to take over you new custom shopify site.",
        ],
      ]);
      setActivePriceOne("$3,000+");
      setActivePriceTwo("$6,000+");
      setActiveTitleThree(null);
      setActivePriceThree(null);
      setActiveTitleOne("Starter")
      setActiveTitleTwo("Premium");
      setActiveDescriptionOne(null);
      setActiveDescriptionTwo(null);
      setActiveDescriptionThree(null);
      setActiveSolutionList(null);
    }
  }
  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorWeb[0]}
          titleColor={activeColorWeb[1]}
          borderColor={
            isWebsiteHovered ? theme.primaryColor : activeColorWeb[2]
          }
          fontWeight={activeColorWeb[3]}
          title="Custom Website"
          mouseEnter={() => setIsWebsiteHovered(true)}
          mouseLeave={() => setIsWebsiteHovered(false)}
        />
        {/*<SolutionTile*/}
        {/*  onPress={buttonClick}*/}
        {/*  backgroundColor={activeColorAutomation[0]}*/}
        {/*  titleColor={activeColorAutomation[1]}*/}
        {/*  borderColor={*/}
        {/*    isAutomationHovered ? theme.primaryColor : activeColorAutomation[2]*/}
        {/*  }*/}
        {/*  fontWeight={activeColorAutomation[3]}*/}
        {/*  title="Automation"*/}
        {/*  mouseEnter={() => setIsAutomationHovered(true)}*/}
        {/*  mouseLeave={() => setIsAutomationHovered(false)}*/}
        {/*/>*/}
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorMarketing[0]}
          titleColor={activeColorMarketing[1]}
          borderColor={
            isMarketingHovered ? theme.primaryColor : activeColorMarketing[2]
          }
          fontWeight={activeColorMarketing[3]}
          title="Website Hosting"
          mouseEnter={() => setIsMarketingHovered(true)}
          mouseLeave={() => setIsMarketingHovered(false)}
        />
        <SolutionTile
          onPress={buttonClick}
          backgroundColor={activeColorEcommerce[0]}
          titleColor={activeColorEcommerce[1]}
          borderColor={
            isEComHovered ? theme.primaryColor : activeColorEcommerce[2]
          }
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
          priceThree={activePriceThree}
          titleOne={activeTitleOne}
          titleTwo={activeTitleTwo}
          titleThree={activeTitleThree}
          descriptionOne={activeDescriptionOne}
          descriptionTwo={activeDescriptionTwo}
          descriptionThree={activeDescriptionThree}
          packages={activePackageList}
          buttonText="Contact us today"
        />
      </div>
      {/*{activeSolutionList != null ? (*/}
      {/*  <SectionSolutionALaCarte solutions={activeSolutionList} />*/}
      {/*) : (*/}
      {/*  ""*/}
      {/*)}*/}
      <HowItWorks
        title={activeHowItWorksTitle}
        collection={activeHowItWorksList}
      />
    </div>
  );
}

export default SectionSolutionPackages;
