"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import style from "./sectioncontactform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import theme from "@/app/theme";
import IconBox from "@/sections/section-contact-form/IconBox";
import Divider from "@/sections/section-contact-form/Divider";
import SmallTextInput from "@/components/comp-small-text-input/SmallTextInput";
import LargeTextInput from "@/components/comp-large-text-input/LargeTextInput";
import PlanDropdown from "@/components/comp-drop-down/PlanDropdown";
import Link from "next/link";
function SectionContactForm() {
  const [firstNameValue, setFirstnameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [companyNameValue, setCompanyNameValue] = useState("");
  const [industryNameValue, setIndustryNameValue] = useState("");
  const [anythingElseValue, setAnythingElseValue] = useState("");
  const [planValue, setPlanValue] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? theme.primaryColor : theme.black,
    color: isHovered ? theme.black : theme.white,
    transition: "background-color 0.3s, color 0.3s",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "online-inquiries"), {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        companyName: companyNameValue,
        industry: industryNameValue,
        plan: planValue,
        anythingElse: anythingElseValue,
      });
      console.log("Successful");
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <h1 className={style.title}>
          Contact our
          <br /> sales team
        </h1>
        <p style={{ color: theme.darkGrey }} className={style.subtitle}>
          Let's explore how necti can assist you.
        </p>
        <div
          style={{ backgroundColor: theme.lightGrey }}
          className={style.keyTextContainer}
        >
          <IconBox
            text={
              "One flexible solution for your business to grow, improve, and change."
            }
          />
          <Divider />
          <IconBox
            text={"Custom tailored solutions to help level up your business."}
          />
          <Divider />

          <IconBox
            text={
              "Dedicated support to work with you and your team to ensure you get the best solution for you business."
            }
          />
        </div>
        <p className={style.callText}>
          Looking for support?{" "}
          <a
            href="tel:951-434-7652"
            style={{ color: theme.primaryColor, textDecoration: "underline" }}
          >
            Call Today
          </a>
        </p>
      </div>
      <div className={style.rightContainer}>
        <form onSubmit={handleSubmit}>
          <div className={style.topContainer}>
            <SmallTextInput
              title={"First name *"}
              placeholder={"John"}
              value={firstNameValue}
              onChange={(e) => setFirstnameValue(e.target.value)}
              required={true}
            />
            <SmallTextInput
              title={"Last name *"}
              placeholder={"Smith"}
              value={lastNameValue}
              onChange={(e) => setLastNameValue(e.target.value)}
              required={true}
            />
          </div>
          <div className={style.bottomContainer}>
            <LargeTextInput
              title={"Email *"}
              placeholder={"johnsmith@gmail.com"}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required={true}
            />
            <LargeTextInput
              title={"Company name *"}
              placeholder={"J's Extermination"}
              value={companyNameValue}
              onChange={(e) => setCompanyNameValue(e.target.value)}
              required={true}
            />
            <LargeTextInput
              title={"Industry *"}
              placeholder={"Pest Control"}
              value={industryNameValue}
              onChange={(e) => setIndustryNameValue(e.target.value)}
              required={true}
            />
            <PlanDropdown
              value={planValue}
              onChange={(plan) => setPlanValue(plan)}
            />
            <LargeTextInput
              title={"Anything else?"}
              placeholder={"I need a nice website."}
              value={anythingElseValue}
              onChange={(e) => setAnythingElseValue(e.target.value)}
            />
          </div>
          <div>
            <p style={{ color: theme.darkGrey }} className={style.warningText}>
              Fields marked with asterisk ( * ) are required.
            </p>
            <button
              // style={{ backgroundColor: theme.black, color: theme.white }}
              style={buttonStyle}
              className={style.buttonDark}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SectionContactForm;
