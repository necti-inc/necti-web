import React from "react";
import style from "./hometemporary.module.css";
import theme from "@/app/theme";

function HomeTemporary() {
  return (
    <div className={style.container} style={{ backgroundColor: theme.black }}>
      <h2 className={style.header} style={{ color: theme.primaryColor }}>
        Coming Soon
      </h2>
      <a
        className={style.contactButton}
        style={{ color: theme.darkGrey }}
        href="mailto:info@necti.io?subject=Inquiry from the Website"
      >
        Contact us today.
      </a>
      <h1 style={{ color: theme.primaryColor }} className={style.logo}>
        necti
      </h1>
    </div>
  );
}

export default HomeTemporary;
