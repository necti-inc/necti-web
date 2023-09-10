import React from "react";
import style from "./sectionsolutionalacarte.module.css";
import theme from "@/app/theme";
import AlacarteBox from "@/components/comp-alacarte-box/AlacarteBox";

function SectionSolutionALaCarte(props) {
  return (
    <div style={{ borderColor: theme.grey }} className={style.container}>
      <div>
        <h2 className={style.header}>A la Carte Solutions</h2>
        <p style={{ color: theme.black }} className={style.subTitle}>
          Need a quick solution? Choose from one of our <br /> A la Carte
          Solutions today!
        </p>
      </div>
      <div className={style.solutionsContainer}>
        {props.solutions.map((item, index) => (
          <div key={index}>
            <AlacarteBox
              businessName={item[0]}
              devType={item[1]}
              price={item[2]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionSolutionALaCarte;
