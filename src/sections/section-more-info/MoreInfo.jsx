import React from "react";
import style from "./moreinfo.module.css";
import theme from "@/app/theme";
import MoreInfoCheckDown from "./MoreInfoCheckDown";
import Image from "next/image";
import MoreInfoImage from "../../../public/home-more-info.png";

const itemsList = [
  [
    "Hosting fees included",
    "Hosting fees are built right into the monthly payment.",
  ],
  [
    "Website adjustments",
    "Change anything you want at anytime and it will be done within 2-3 days.",
  ],
  [
    "24/7 Customer Service",
    "Call direct anytime day or night, no phone trees or automated responses.",
  ],
  [
    "Web Design & Development",
    "Includes over 40 hours of design, development, and testing.",
  ],
  [
    "100 Google Page Speed Score",
    "We can achieve a perfect 100 on Google Page Speed Scores, and boost your rank.",
  ],
  [
    "Google Analytics",
    "We install analytics for free to monitor traffic and where it comes from.",
  ],
];

function MoreInfo() {
  return (
    <div style={{ borderColor: theme.grey }} className={style.container}>
      <div className={style.leftContainer}>
        <Image
          className={style.imageSize}
          src={MoreInfoImage}
          alt="More Info Image"
        />
      </div>

      <div
        style={{
          borderColor: theme.grey,
          backgroundImage: 'url("/more-info-background.png")',
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
        className={style.rightContainer}
      >
        <h2 className={style.title} style={{ color: theme.black }}>
          <span style={{ color: theme.primaryColor }}>$0</span> down,{" "}
          <span style={{ color: theme.primaryColor }}>$100</span> per month,{" "}
          <br /> no minimum contract
        </h2>
        <p className={style.subtitle} style={{ color: theme.darkGrey }}>
          $0 down for a standard 5 page small business website. If you need more
          than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved. <br /> <br /> You
          own your domain, content, listing, and profiles. Cancel anytime with
          no hassle or fees.
        </p>
        <div className={style.flexContainer}>
          {itemsList.map((item, index) => (
            <div key={index} className={style.item}>
              <MoreInfoCheckDown title={item[0]} description={item[1]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
