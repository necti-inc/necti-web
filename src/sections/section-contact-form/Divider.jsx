import React from "react";
import style from "./sectioncontactform.module.css";
import theme from "@/app/theme";

function Divider() {
  return <div style={{ borderColor: theme.grey }} className={style.divider} />;
}

export default Divider;
