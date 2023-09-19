import AboutBody from "@/sections/section-about-body/AboutBody";
import AboutHeader from "@/sections/section-about-header/AboutHeader";
import AboutQuality from "@/sections/section-about-quality/AboutQuality";
import ContactOurTeam from "@/sections/section-contact-our-team/ContactOurTeam";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutBody />
      <AboutQuality />
      <ContactOurTeam />
    </div>
  );
};

export default About;
