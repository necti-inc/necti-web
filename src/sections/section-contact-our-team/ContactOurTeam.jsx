import React from "react";
import style from "./contactourteam.module.css";
import theme from "@/app/theme";
import ViewAllButton from "@/components/button-view-all/ViewAllButton";
import BusinessBar from "@/components/comp-business-bar/BusinessBar";

function ContactOurTeam() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Contact Our Team</h2>
      <h3 style={{ color: theme.darkGrey }} className={style.subTitle}>
        Whether you&apos;re a small business owner, or an established
        enterprise, we&apos;re here to help. Contact our team to learn more
        about our customized solutions and affordable pricing options.
      </h3>
      <ViewAllButton title="Contact us today" path="/solutions" />
      <div className={style.lowerContainer} />
      <BusinessBar />
      <div className={style.lowerContainer} />
    </div>
  );
}

export default ContactOurTeam;
