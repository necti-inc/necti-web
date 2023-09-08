import style from "./page.module.css";
import theme from "./theme";
import Image from "next/image";

import SolutionBox from "@/components/comp-solution-box/SolutionBox";
import OurWorkItems from "@/sections/section-our-work/OurWorkItems";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";
import BusinessBar from "@/components/comp-business-bar/BusinessBar";

import HowItWorks from "@/sections/section-how-it-works/HowItWorks";
import LearnMore from "@/sections/section-learn-more/LearnMore";
import BrowseBySolution from "@/sections/section-browse-by-solution/BrowseBySolution";
import MoreInfo from "@/sections/section-more-info/MoreInfo";
import SectionPackages from "@/sections/section-packages/SectionPackages";
import ContactOurTeam from "@/sections/section-contact-our-team/ContactOurTeam";
import HomeHeader from "@/sections/section-home-header/HomeHeader";
import Solutions from "@/sections/section-solutions/Solutions";
import OurSolutions from "@/sections/section-our-solutions/OurSolutions";
import OurWork from "@/sections/section-our-work/OurWork";

const itemsList = [
  [
    "Design",
    "Choose from 100s of high quality themes. Or create your own unique theme.",
  ],
  ["Develop", "Once you have chosen a theme. We will begin development. "],
  [
    "Deploy",
    "Once development is complete you will be able to choose the best hosting plan for you.",
  ],
];

export default function Home() {
  return (
    <div className={style.container}>
      <HomeHeader />
      <Solutions />
      <MoreInfo />
      <OurWork />
      <BusinessBar />
      <OurSolutions />
      <HowItWorks title="Web-Development" collection={itemsList} />
      <LearnMore />
      <BrowseBySolution />
      <SectionPackages />
      <ContactOurTeam />
    </div>
  );
}
