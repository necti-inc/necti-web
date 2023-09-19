import React from "react";
import style from "./aboutbody.module.css";
import AboutMoreInfo from "@/components/comp-about-more-info/AboutMoreInfo";
import CommitedImage from "../../../public/about-commited-image.png";
import EntImage from "../../../public/about-entrepreneurs-image.png";

function AboutBody() {
  return (
    <div className={style.container}>
      <AboutMoreInfo
        image={CommitedImage}
        position={0}
        title={"We're committed to helping you grow!"}
        description={`We know that one of the biggest struggles for small businesses is growing.
            Here at necti, we strive to help your business grow with a strong online presence and a unique approach to business.`}
        description2={
          "If you want to see your business grow and take off, then you are at the right place because here at necti, we will be sure to make that happen."
        }
      />
      <AboutMoreInfo
        image={EntImage}
        position={1}
        title={"We’re entrepreneurs, too!"}
        description={`We’ve been there ourselves, so we understand the journey. That’s why we’ve built a platform, created tools, and developed solutions with one goal in mind: to help every single person with a dream to level up their  business be able to make that dream come true.`}
        description2={
          "If you have the ambition to make your business standout,  you’re in the right place. Everybody at necti is here to help you. We give you our expertise and our admiration to help make your business grow."
        }
      />
    </div>
  );
}

export default AboutBody;
