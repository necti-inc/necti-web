import React from "react";
import style from "./ourwork.module.css";
import theme from "@/app/theme";
import OurWorkItems from "./OurWorkItems";

import PictureItMobile from "../../../public/customer-picture-it-mobile.png";
import ImpactPestPros from "../../../public/customer-impact-pest-pros.png";
import PremierIkon from "../../../public/customer-premierikon.png";
import LegendsMedia from "../../../public/customer-legends-media.png";
import KKFit from "../../../public/customer-kkfit.png";
import Hartford from "../../../public/customer-hartford.png";

function OurWork() {
  const ourWork = [
    [
      "Web Development",
      "pictureitmobile.com",
      "https://www.pictureitmobile.com",
      PictureItMobile,
    ],
    [
      "Web Development",
      "impactpestpros.com",
      "https://www.impactpestpros.com",
      ImpactPestPros,
    ],
    [
      "Web Development",
      "premierikon.com",
      "https://www.premierikon.com",
      PremierIkon,
    ],
    [
      "Web Development",
      "legends.media",
      "https://www.legends.media",
      LegendsMedia,
    ],
    ["Web Development", "shop.kkfit.com", "https://www.shop.kkfit.com", KKFit],
    [
      "Web Development",
      "hartfordltd.com",
      "https://www.hartfordltd.com",
      Hartford,
    ],
  ];
  return (
    <div className={style.ourWorkContainer}>
      <h2 style={{ color: theme.black }} className={style.ourWorkHeader}>
        Our Work
      </h2>
      <OurWorkItems work={ourWork} />
    </div>
  );
}

export default OurWork;
