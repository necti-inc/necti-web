import SectionSolutionALaCarte from "@/sections/section-solution-alacarte/SectionSolutionALaCarte";
import SectionSolutionHeader from "@/sections/section-solution-header/SectionSolutionHeader";
import SectionSolutionPackages from "@/sections/section-solution-packages/SectionSolutionPackages";
import React from "react";

const Solutions = () => {
  return (
    <div>
      <SectionSolutionHeader />
      <SectionSolutionPackages />
      {/* <SectionSolutionALaCarte /> */}
    </div>
  );
};

export default Solutions;
