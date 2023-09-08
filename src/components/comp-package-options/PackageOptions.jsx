import React from "react";
import style from "./packageoptions.module.css";
import theme from "@/app/theme";
import PricingOption from "./PricingOption";
import LineCriteria from "./LineCriteria";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import LineCriteriaHeader from "./LineCriteriaHeader";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";


function PackageOptions() {
  return (
    <div style={{ borderColor: theme.grey }} className={style.container}>
      <div className={style.upperContainer}>
        <div>
          <h2 className={style.title}>Compare Plans</h2>
          <p style={{ color: theme.darkGrey }} className={style.subTitle}>
            Identify the package that’s right for your business and then get
            started.
          </p>
        </div>
        <PricingOption
          price="$50/mo"
          color={theme.black}
          textColor={theme.white}
          optionTitle="Starter"
        />
        <PricingOption
          price="$100/mo"
          color={theme.primaryColor}
          textColor={theme.black}
          optionTitle="Premium"
        />
      </div>
      <div>
        <LineCriteriaHeader />
        <LineCriteria
          title={"Website Design"}
          backgroundColor={theme.lightGrey}
          iconType={faCheck}
        />
        <LineCriteria
          title={"Website Development"}
          backgroundColor={theme.white}
          iconType={faCheck}
        />
        <LineCriteria
          title={"Website Hosting"}
          backgroundColor={theme.lightGrey}
          iconType={faCheck}
        />
        <LineCriteria
          title={"Website Maintenance"}
          backgroundColor={theme.white}
          iconType={faDollarSign}
        />
        <LineCriteria
          title={"Website Analytics"}
          backgroundColor={theme.lightGrey}
          iconType={faDollarSign}
        />
        <LineCriteria
          title={"Business Email Setup"}
          backgroundColor={theme.white}
          iconType={faDollarSign}
        />
        <LineCriteria
          title={"Business Socials Setup"}
          backgroundColor={theme.lightGrey}
          iconType={faDollarSign}
        />
      </div>
      <div className={style.allButtonContainer}>
        <ViewAllButton title="Discover more packages" path="/solutions" />
      </div>
    </div>
  );
}

export default PackageOptions;
