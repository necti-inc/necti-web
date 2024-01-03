"use client";

import React, { useState } from "react";
import style from "./homeheader.module.css";
import theme from "@/app/theme";
import Link from "next/link";

function HomeHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? theme.primaryColor : theme.black,
    color: isHovered ? theme.white : theme.white,
    transition: "background-color 0.3s, color 0.3s",
  };

  const buttonStyleLeft = {
    borderColor: isLeftHovered ? theme.primaryColor : theme.black,
    color: isLeftHovered ? theme.primaryColor : theme.black,
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/home-background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={style.outerContainer}
    >
      <div className={style.heroContainer}>
        <h1 style={{ color: theme.black }} className={style.title}>
          Level up your business with a strong online presence
        </h1>
        <p style={{ color: theme.black }} className={style.subTitle}>
          Stand out from the competition with a professional website and SEO
          optimization.
        </p>
        <div className={style.ctaContainer}>
          <Link href={"/contact"}>
            <button
              style={buttonStyle}
              className="buttonDark"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Free Quote
            </button>
          </Link>
          <Link href={"/solutions"}>
            <button
              style={buttonStyleLeft}
              className="buttonLight"
              onMouseEnter={() => setIsLeftHovered(true)}
              onMouseLeave={() => setIsLeftHovered(false)}
            >
              See Pricing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
