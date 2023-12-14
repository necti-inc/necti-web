"use client";

import React, { useState, useEffect } from "react";
import style from "./packageoptions.module.css";
import theme from "@/app/theme";
import PricingOption from "./PricingOption";
import LineCriteria from "./LineCriteria";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import LineCriteriaHeader from "./LineCriteriaHeader";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";

function SectionPackages(props) {
  const [activeIcons, setActiveIcons] = useState(1);

  function buttonClick(title) {
    if (title === "Starter") {
      setActiveIcons(1);
    } else if (title === "Plus") {
      setActiveIcons(2);
    } else if (title === "Premium") {
      setActiveIcons(3);
    }
  }

  return (
    <div>
      <div
        style={{ borderColor: props.showBorder ? theme.grey : theme.white }}
        className={style.webContainer}
      >
        <div className={style.upperContainer}>
          <div>
            <h2 className={style.title}>Compare Plans</h2>
            <p style={{ color: theme.darkGrey }} className={style.subTitle}>
              Identify the package that’s right for your business and then get
              started.
            </p>
          </div>
          <PricingOption
            price={props.priceOne}
            color={theme.black}
            textColor={theme.white}
            optionTitle={props.titleOne}
            borderRadius={["10px", "0px", "10px", "0px"]}
            onPress={buttonClick}
          />
          <PricingOption
            price={props.priceTwo}
            color={theme.primaryColor}
            textColor={theme.lightGrey}
            optionTitle={props.titleTwo}
            borderRadius={[
              "0px",
              props.titleThree != null ? "0px" : "10px",
              "0px",
              props.titleThree != null ? "0px" : "10px",
            ]}
            onPress={buttonClick}
          />
          {props.titleThree != null ? (
            <PricingOption
              price={props.priceThree}
              color={theme.black}
              textColor={theme.white}
              optionTitle={props.titleThree}
              borderRadius={["0px", "10px", "0px", "10px"]}
              onPress={buttonClick}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <LineCriteriaHeader
            descriptionOne={props.descriptionOne}
            descriptionTwo={props.descriptionTwo}
            descriptionThree={props.descriptionThree}
            optionThree={props.priceThree}
          />
          {props.packages.map((item, index) => (
            <div key={index}>
              <LineCriteria
                title={item[0]}
                backgroundColor={item[1]}
                iconType={item[2]}
                iconTwoType={item[3]}
                optionThree={props.priceThree}
                mobileActiveIcon={faCheck}
              />
            </div>
          ))}
        </div>
        <div className={style.allButtonContainer}>
          <ViewAllButton title={props.buttonText} path="/solutions" />
        </div>
      </div>
      <div className={style.mobileContainer}>
        <div>
          <h2 className={style.title}>Compare Plans</h2>
          <p style={{ color: theme.darkGrey }} className={style.subTitle}>
            Identify the package that’s right for your business and then get
            started.
          </p>
        </div>
        <div className={style.mobilePriceOptions}>
          <PricingOption
            price={props.priceOne}
            color={theme.black}
            textColor={theme.white}
            optionTitle={props.titleOne}
            borderRadius={["30px", "0px", "30px", "0px"]}
            onPress={buttonClick}
          />
          <PricingOption
            price={props.priceTwo}
            color={theme.primaryColor}
            textColor={theme.lightGrey}
            optionTitle={props.titleTwo}
            borderRadius={[
              "0px",
              props.titleThree != null ? "0px" : "30px",
              "0px",
              props.titleThree != null ? "0px" : "30px",
            ]}
            onPress={buttonClick}
          />
          {props.titleThree != null ? (
            <PricingOption
              price={props.priceThree}
              color={theme.black}
              textColor={theme.white}
              optionTitle={props.titleThree}
              borderRadius={["0px", "30px", "0px", "30px"]}
              onPress={buttonClick}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <LineCriteriaHeader
            descriptionOne={props.descriptionOne}
            descriptionTwo={props.descriptionTwo}
            descriptionThree={props.descriptionThree}
            optionThree={props.priceThree}
          />
          {props.packages.map((item, index) => (
            <div key={index}>
              <LineCriteria
                title={item[0]}
                backgroundColor={item[1]}
                iconType={item[2]}
                iconTwoType={item[3]}
                optionThree={props.priceThree}
                mobileActiveIcon={
                  activeIcons === 1
                    ? item[2]
                    : activeIcons === 2
                    ? item[3]
                    : faCheck
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionPackages;
