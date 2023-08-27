import React from "react";
import style from "./packageoptions.module.css";
import theme from "@/app/theme";
import PricingOption from "./PricingOption";

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
    </div>
  );
}

export default PackageOptions;
