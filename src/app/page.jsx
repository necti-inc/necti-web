"use client";

import theme from "./theme";
import BusinessBar from "@/components/comp-business-bar/BusinessBar";

import HowItWorks from "@/sections/section-how-it-works/HowItWorks";
import LearnMore from "@/sections/section-learn-more/LearnMore";
import BrowseBySolution from "@/sections/section-browse-by-solution/BrowseBySolution";
import MoreInfo from "@/sections/section-more-info/MoreInfo";
import SectionPackages from "@/sections/section-packages/SectionPackages";
import ContactOurTeam from "@/sections/section-contact-our-team/ContactOurTeam";
import HomeHeader from "@/sections/section-home-header/HomeHeader";
import Solutions from "@/sections/section-solutions/Solutions";
import OurWork from "@/sections/section-our-work/OurWork";

import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";

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

const webPackageList = [
  ["Website Design", theme.lightGrey, faCheck, faCheck],
  ["Website Development", theme.white, faCheck, faCheck],
  ["Website Hosting", theme.lightGrey, faCheck, faCheck],
  ["Website Maintenance", theme.white, faDollarSign, faCheck],
  ["1-2 Website Changes Per Month", theme.lightGrey, faDollarSign, faCheck],
  ["Customer Portal", theme.white, faDollarSign, faCheck],
  [
    "4-6 Website Changes Per Month",
    theme.lightGrey,
    faDollarSign,
    faDollarSign,
  ],
  ["Website Analytics", theme.white, faDollarSign, faDollarSign],
  ["1 Blog Post Per Month", theme.lightGrey, faDollarSign, faDollarSign],
];

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Solutions />
      <MoreInfo />
      <SectionPackages
        priceOne="$50+/mo"
        priceTwo="$150+/mo"
        priceThree="$300+/mo"
        titleOne="Starter"
        titleTwo="Plus"
        titleThree="Premium"
        packages={webPackageList}
        showBorder={false}
        buttonText="Discover more packages"
      />
      <HowItWorks title="Web-Development" collection={itemsList} />
      <OurWork />
      <BusinessBar />
      <LearnMore />
      <BrowseBySolution />
      <ContactOurTeam />
    </div>
  );
}
