import React from "react";
import style from "./ourworkbody.module.css";
import OurWorkBoxSmall from "@/components/comp-our-work-box-small/OurWorkBoxSmall";
import theme from "@/app/theme";

function OurWorkBody(props) {
  return (
    <div
      className={style.ourWorkCardsContainer}
      style={{ backgroundColor: theme.lightGrey }}
    >
      {props.work.map((item, index) => (
        <div key={index}>
          <OurWorkBoxSmall
            path={item[0]}
            businessName={item[1]}
            devType={item[2]}
          />
        </div>
      ))}
    </div>
  );
}

export default OurWorkBody;
