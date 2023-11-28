import React from "react";
import style from "./packageoptions.module.css";
import theme from "@/app/theme";
import PricingOption from "./PricingOption";
import LineCriteria from "./LineCriteria";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import LineCriteriaHeader from "./LineCriteriaHeader";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";

function SectionPackages(props) {
  return (
    <div
      style={{ borderColor: props.showBorder ? theme.grey : theme.white }}
      className={style.container}
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
        />
        <PricingOption
          price={props.priceTwo}
          color={theme.primaryColor}
          textColor={theme.lightGrey}
          optionTitle={props.titleTwo}
        />
        {props.titleThree != null ? (
          <PricingOption
            price={props.priceThree}
            color={theme.black}
            textColor={theme.white}
            optionTitle={props.titleThree}
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
            />
          </div>
        ))}
      </div>
      <div className={style.allButtonContainer}>
        <ViewAllButton title={props.buttonText} path="/solutions" />
      </div>
    </div>
  );
}

export default SectionPackages;
