import React from "react";
import style from "./sectionsolutionheader.module.css";
import theme from "@/app/theme";

function SectionSolutionHeader() {
  return (
    <div className={style.container}>
      <h1 style={{ color: theme.black }} className={style.header}>
        Solutions
      </h1>
      <p style={{ color: theme.black }} className={style.subHeader}>
        Enhance your digital presence with our comprehensive suite of solutions
        tailored to boost your online visibility, engage your audience, and
        streamline your business operations.{" "}
      </p>
    </div>
  );
}

export default SectionSolutionHeader;
