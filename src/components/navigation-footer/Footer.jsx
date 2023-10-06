import theme from "@/app/theme";
import React from "react";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className={style.footerContainer}
      style={{ backgroundColor: theme.black }}
    >
      <div className={style.bodyContainer}>
        <h2 style={{ color: theme.white }} className={style.title}>
          necti
        </h2>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <h3 style={{ color: theme.white }} className={style.subTitle}>
              Industries
            </h3>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              Technology
            </p>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              E-commerce
            </p>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              Marketing
            </p>
          </div>
          <div className={style.titleContainer}>
            <h3 style={{ color: theme.white }} className={style.subTitle}>
              Services
            </h3>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              Web Development
            </p>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              Marketing
            </p>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              SEO
            </p>
          </div>
          <div className={style.titleContainer}>
            <h3 style={{ color: theme.white }} className={style.subTitle}>
              necti
            </h3>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              About Us
            </p>
            <p style={{ color: theme.darkGrey }} className={style.description}>
              Contact Us
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderColor: theme.darkGrey }} className={style.divider} />
      <div className={style.lowerContainer}>
        <p style={{ color: theme.darkGrey }} className={style.copyRightText}>
          Copyright © 2024
        </p>
        <div className={style.iconBox}>
          <div
            style={{ backgroundColor: theme.lightBlack }}
            className={style.iconContainer}
          >
            <FontAwesomeIcon
              style={{ color: theme.white }}
              className={style.icon}
              icon={faInstagram}
            />
          </div>
          <div
            style={{ backgroundColor: theme.lightBlack }}
            className={style.iconContainer}
          >
            <FontAwesomeIcon
              style={{ color: theme.white }}
              className={style.icon}
              icon={faFacebookF}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
