import React from "react";
import style from "./browsebysolution.module.css";
import theme from "../../app/theme.js";
import BySolutionCard from "./BySolutionCard";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";

const itemsList = [
  [
    "Web",
    "We design and develop stunning websites tailored to you.",
    "/solutions",
  ],
  [
    "Marketing",
    "Our hosting solutions offer high performance, robust security.",
    "/solutions",
  ],
  [
    "Ecommerce",
    "Choose from digital advertising to search engine optimization.",
    "/solutions",
  ],
  [
    "Business",
    "Choose from business consulting to process optimization.",
    "/solutions",
  ],
];

function BrowseBySolution() {
  return (
    <div style={{ borderColor: theme.grey }} className={style.container}>
      <h2 style={{ color: theme.black }} className={style.solutionTitle}>
        Browse by Solution
      </h2>
      <div className={style.bySolutionCardContainer}>
        {itemsList.map((item, index) => (
          <div key={index}>
            <BySolutionCard
              title={item[0]}
              description={item[1]}
              path={item[2]}
            />
          </div>
        ))}
      </div>
      <div className={style.allButtonContainer}>
        <ViewAllButton title="Browse all solutions" path="/solutions" />
      </div>
    </div>
  );
}

export default BrowseBySolution;
