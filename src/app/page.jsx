import style from "./page.module.css";
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
  ["Website Analytics", theme.lightGrey, faDollarSign, faCheck],
  ["Business Email Setup", theme.white, faDollarSign, faCheck],
  ["Business Socials Setup", theme.lightGrey, faDollarSign, faCheck],
];

export default function Home() {
  return (
    <div className={style.container}>
      <HomeHeader />
      <Solutions />
      <MoreInfo />
      <SectionPackages
        priceOne="$50/mo"
        priceTwo="$100/mo"
        titleOne="Starter"
        titleTwo="Premium"
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
