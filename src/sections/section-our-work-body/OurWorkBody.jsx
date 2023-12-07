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
            devType={item[0]}
            businessName={item[1]}
            path={item[2]}
            image={item[3]}
          />
        </div>
      ))}
    </div>
  );
}

export default OurWorkBody;
