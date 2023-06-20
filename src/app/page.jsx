import style from "./page.module.css";
import theme from "./theme";

import SolutionBox from "@/components/solution-box/SolutionBox";
import OurWork from "@/components/our-work/OurWork";
import ViewAllButton from "@/components/view-all-button/ViewAllButton";
import BusinessBar from "@/components/business-bar/BusinessBar";

import googleIcon from "../../public/icons/google-icon.png";
import shopifyIcon from "../../public/icons/shopify-icon.png";
import nextjsIcon from "../../public/icons/nextjs-icon.png";
import nextdoorIcon from "../../public/icons/nextdoor-icon.png";
import facebookIcon from "../../public/icons/facebook-icon.png";
import instagramIcon from "../../public/icons/instagram-icon.png";
import reactIcon from "../../public/icons/react-icon.png";
import yelpIcon from "../../public/icons/yelp-icon.png";
import htmlIcon from "../../public/icons/html-icon.png";
import SuccessComp from "@/components/success-comp/SuccessComp";

const solutionsImage = [
  googleIcon,
  shopifyIcon,
  reactIcon,
  nextjsIcon,
  htmlIcon,
  nextdoorIcon,
  yelpIcon,
  instagramIcon,
  facebookIcon,
];

export default function Home() {
  return (
    <div className={style.container}>
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

      <div
        style={{ backgroundColor: theme.lightGrey }}
        className={style.solutionContainer}
      >
        <div className={style.leftItem}>
          <button
            style={{ color: theme.black, borderColor: theme.black }}
            className="buttonSlim"
          >
            100+ Solutions
          </button>
          <h2 style={{ color: theme.black }} className={style.solutionTitle}>
            Digital solutions that drive website traffic and help your business
            succeed
          </h2>
          <p style={{ color: theme.black }} className={style.solutionSubTitle}>
            Unlock your online potential with expert SEO and marketing
            solutions. Drive qualified traffic to your site and boost your
            companies visibility.
          </p>
          <ViewAllButton title="View all solutions" path="/solutions" />
        </div>
        <div className={style.rightItem}>
          {solutionsImage.map((image, index) => (
            <div key={index}>
              <SolutionBox image={image} path={"/solutions"} />
            </div>
          ))}
        </div>
      </div>
      <div className={style.ourWorkContainer}>
        <h2 style={{ color: theme.black }} className={style.ourWorkHeader}>
          Our Work
        </h2>
        <OurWork />
      </div>
      <BusinessBar />
      <div style={{ backgroundColor: theme.lightGrey }}>
        <div className={style.successContainer}>
          <h2 style={{ color: theme.black }} className={style.solutionTitle}>
            Driving Success for Your Business
          </h2>
          <p style={{ color: theme.black }} className={style.successSubTitle}>
            Maximizing your business potential with <br /> custom web solutions.
          </p>
        </div>
        <SuccessComp />
      </div>
    </div>
  );
}
