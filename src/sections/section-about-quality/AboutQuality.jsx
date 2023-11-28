"use client";

import React, { useState, useEffect } from "react";
import style from "./aboutquality.module.css";
import theme from "@/app/theme";
import AboutQualityIcon from "@/components/comp-about-quality-icon/AboutQualityIcon";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";
import Link from "next/link";

function AboutQuality() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? theme.black : theme.primaryColor,
    color: isHovered ? theme.white : theme.lightGrey,
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div className={style.container}>
      <div>
        <h2 className={style.header}>
          <span style={{ color: theme.primaryColor }}>Quality</span>
          <span style={{ color: theme.black }}> Over Quantity</span>
        </h2>
        <p style={{ color: theme.darkGrey }} className={style.subHeader}>
          We focus on the needs on each individual business and tailor content
          around what makes it unique. Our collaborative process is very hands
          on as we work closely with you to create a website you&apos;re 100%
          happy with and not something you just settle for.
        </p>
      </div>
      <div className={style.iconOuterContainer}>
        <div className={style.iconContainer}>
          <AboutQualityIcon icon={"1"} />
          <div className={style.dashedLine} />
          <AboutQualityIcon icon={"2"} />
          <div className={style.dashedLine} />
          <AboutQualityIcon icon={"3"} />
        </div>
        <div className={style.textOuterContainer}>
          <div className={style.textContainer}>
            <h3 className={style.header2}>No Pre-Written Content</h3>
            <p className={style.description}>
              We write unique and engaging content around your company. Everyone
              is unique!
            </p>
          </div>
          <div className={style.textContainer}>
            <h3 className={style.header2}>Customer Service</h3>
            <p className={style.description}>
              No automated systems - When you need help the lead developer
              answers your call.
            </p>
          </div>
          <div className={style.textContainer}>
            <h3 className={style.header2}>No Limits on Design</h3>
            <p className={style.description}>
              We can edit the design to cater to your tastes. Everything is
              customizable!
            </p>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <Link href={"/solutions"}>
            <button
              style={buttonStyle}
              className="buttonDark"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Our services
            </button>
          </Link>
        </div>
      </div>
      <div className={style.iconOuterContainerMobile}>
        <div className={style.textOuterContainer}>
          <div className={style.textContainer}>
            <AboutQualityIcon icon={"1"} />
            <h3 className={style.header2}>No Pre-Written Content</h3>
            <p className={style.description}>
              We write unique and engaging content around your company. Everyone
              is unique!
            </p>
          </div>
          <div className={style.textContainer}>
            <AboutQualityIcon icon={"2"} />
            <h3 className={style.header2}>Customer Service</h3>
            <p className={style.description}>
              No automated systems - When you need help the lead developer
              answers your call.
            </p>
          </div>
          <div className={style.textContainer}>
            <AboutQualityIcon icon={"3"} />
            <h3 className={style.header2}>No Limits on Design</h3>
            <p className={style.description}>
              We can edit the design to cater to your tastes. Everything is
              customizable!
            </p>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <Link href={"/solutions"}>
            <button
              style={buttonStyle}
              className="buttonDark"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Our services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutQuality;
