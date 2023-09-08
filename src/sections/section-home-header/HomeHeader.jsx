import React from "react";
import style from "./homeheader.module.css";
import theme from "@/app/theme";

function HomeHeader() {
  return (
    <div
      style={{
        backgroundImage: 'url("/home-background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
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
          <button
            style={{ backgroundColor: theme.black, color: theme.white }}
            className="buttonDark"
          >
            Free Quote
          </button>
          <button
            style={{ borderColor: theme.black, color: theme.black }}
            className="buttonLight"
          >
            See Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
