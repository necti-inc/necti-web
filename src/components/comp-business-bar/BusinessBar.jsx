import React from "react";
import BusinessBarItem from "./BusinessBarItem";
import style from "./businessbar.module.css";
import theme from "@/app/theme";

function BusinessBar() {
  return (
    <div style={{ borderColor: theme.lightGrey }} className={style.container}>
      <BusinessBarItem title="3k+" description="Customers" path="/work" />
      <BusinessBarItem title="100+" description="Solutions" path="/solutions" />
      <BusinessBarItem
        title="100+"
        description="Lead generations"
        path="/about"
      />
      <BusinessBarItem
        title="#1"
        description="Web development agency"
        path="/contact"
      />
    </div>
  );
}

export default BusinessBar;
