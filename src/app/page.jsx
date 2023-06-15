import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import theme from "./theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import SolutionBox from "@/components/solution-box/SolutionBox";
import OurWork from "@/components/our-work/OurWork";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <div>
        <img src="/home-background.png" width={"100%"}/>
      </div> */}
      {/* <div className={styles.heroContainer}>
        <h1 style={{ color: theme.black }} className={styles.title}>
          Level up your business with a strong online presence
        </h1>
        <p style={{ color: theme.black }} className={styles.subTitle}>
          Stand out from the competition with a professional website and SEO
          optimization.
        </p>
        <div className={styles.ctaContainer}>
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
      </div> */}
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
        <div className={styles.heroContainer}>
          <h1 style={{ color: theme.black }} className={styles.title}>
            Level up your business with a strong online presence
          </h1>
          <p style={{ color: theme.black }} className={styles.subTitle}>
            Stand out from the competition with a professional website and SEO
            optimization.
          </p>
          <div className={styles.ctaContainer}>
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
        className={styles.solutionContainer}
      >
        <div className={styles.leftItem}>
          <button
            style={{ color: theme.black, borderColor: theme.black }}
            className="buttonSlim"
          >
            100+ Solutions
          </button>
          <h2 style={{ color: theme.black }} className={styles.solutionTitle}>
            Digital solutions that drive website traffic and help your business
            succeed
          </h2>
          <p style={{ color: theme.black }} className={styles.solutionSubTitle}>
            Unlock your online potential with expert SEO and marketing
            solutions. Drive qualified traffic to your site and boost your
            companies visibility.
          </p>
          <div className={styles.textButtonContainer}>
            <Link
              style={{ color: theme.primaryColor }}
              className={styles.textButton}
              href={"/solutions"}
            >
              View all solutions
            </Link>
            <FontAwesomeIcon
              style={{ color: theme.primaryColor }}
              icon={faArrowRightLong}
              className={styles.textButtonIcon}
            />
          </div>
        </div>
        <div className={styles.rightItem}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>
              <SolutionBox />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ourWorkContainer}>
        <h2 style={{ color: theme.black }} className={styles.ourWorkHeader}>
          Our Work
        </h2>
        <OurWork />
      </div>
    </div>
  );
}
