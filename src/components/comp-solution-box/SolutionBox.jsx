import React from "react";
import style from "./solutionbox.module.css";
import theme from "../../app/theme";
import Image from "next/image";
import Link from "next/link";

function SolutionBox(props) {
  return (
    <Link href={props.path}>
      <div
        className={style.boxContainer}
        style={{ borderColor: theme.grey, backgroundColor: theme.white }}
      >
        <Image className={style.image} src={props.image} alt="Solution Image" />
      </div>
    </Link>
  );
}

export default SolutionBox;
