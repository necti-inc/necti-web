import React from "react";
import style from "./aboutmoreinfo.module.css";
import Image from "next/image";

function AboutMoreInfo(props) {
  return (
    <div>
      {props.position === 0 ? (
        <div className={style.container}>
          <div className={style.imageContent}>
            <Image
              className={style.imageSize}
              src={props.image}
              alt="More Info Image"
            />
          </div>
          <div className={style.textContent}>
            <h2 className={style.header}>{props.title}</h2>
            <p className={style.description}>{props.description}</p>
            <p className={style.description}>{props.description2}</p>
          </div>
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.textContent}>
            <h2 className={style.header}>{props.title}</h2>
            <p className={style.description}>{props.description}</p>
            <p className={style.description}>{props.description2}</p>
          </div>
          <div className={style.imageContent}>
            <Image
              className={style.imageSize}
              src={props.image}
              alt="More Info Image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMoreInfo;
