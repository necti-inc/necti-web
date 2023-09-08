import React from "react";
import style from "./oursolutions.module.css";
import theme from "@/app/theme";
import Image from "next/image";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";
import test from "../../../public/what-we-do-seperator.png";
import image from "../../../public/our-solutions-image.png";

function OurSolutions() {
  return (
    <div
      style={{ backgroundColor: theme.lightGrey }}
      className={style.whatWeDo}
    >
      <div
        style={{
          backgroundImage: 'url("/our-solutions-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "75vh",
        }}
        className={style.whatWeDoImage}
      >
        p
      </div>
      <Image
        className={style.whatWeDoSeperator}
        src={test}
        alt="Solution Image"
      />
      <div className={style.whatWeDoTextContainer}>
        <h2 style={{ color: theme.black }} className={style.solutionTitle}>
          Our Solutions are Thoughtfully Created with User Experience in Mind
        </h2>
        <div className={style.whatWeDoSubheaderContainer}>
          <p style={{ color: theme.black }} className={style.solutionSubTitle}>
            We are passionate about create high-quality work that is visually
            appealing, highly functional, and easy to use.
          </p>
        </div>
        <ViewAllButton title="Get in touch" path="/contact" />
      </div>
    </div>
  );
}

export default OurSolutions;
