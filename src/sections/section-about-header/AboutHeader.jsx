import React from "react";
import style from "./aboutheader.module.css";
import theme from "@/app/theme";
import Image from "next/image";

import HeaderImage from "../../../public/about-header-image.png";

function AboutHeader() {
  return (
    <div style={{ borderColor: theme.grey }} className={style.headerContainer}>
      <div className={style.headerContentLeft}>
        <h1 className={style.aboutHeader}>
          Empowering Dreams, <br /> Fueling Success
        </h1>
        <p style={{ color: theme.black }} className={style.subHeader}>
          At Necti, we believe in the power of every individual to become an
          entrepreneur. We are here to unleash your potential, fuel your
          ambitions, and pave the way for your entrepreneurial journey. Our
          mission is to break down barriers and ensure that the opportunities of
          entrepreneurship are accessible to everyone, regardless of background
          or circumstance.{" "}
        </p>
      </div>
      <Image
        className={style.headerImage}
        src={HeaderImage}
        alt="About Us Header Image"
      />
    </div>
  );
}

export default AboutHeader;
