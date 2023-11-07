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
import FormSubmission from "@/sections/section-form-submission/FormSubmission";
function SectionContactForm() {
  const [firstNameValue, setFirstnameValue] = useState(["", true]);
  const [lastNameValue, setLastNameValue] = useState(["", true]);
  const [emailValue, setEmailValue] = useState(["", true]);
  const [companyNameValue, setCompanyNameValue] = useState(["", true]);
  const [industryNameValue, setIndustryNameValue] = useState(["", true]);
  const [anythingElseValue, setAnythingElseValue] = useState(["", true]);
  const [planValue, setPlanValue] = useState("Please select...");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? theme.primaryColor : theme.black,
    color: isHovered ? theme.black : theme.white,
    transition: "background-color 0.3s, color 0.3s",
  };

  const isValidEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    let isValid = true; // Assume everything is valid initially

    // // Check first name
    // if (!firstNameValue[0].trim()) {
    //   setFirstnameValue([firstNameValue[0], false]);
    //   isValid = false;
    // }
    //
    // // Check last name
    // if (!lastNameValue[0].trim()) {
    //   setLastNameValue([lastNameValue[0], false]);
    //   isValid = false;
    // }
    //
    // // Check email (both for emptiness and valid format)
    // if (!emailValue[0].trim() || !isValidEmail(emailValue[0])) {
    //   setEmailValue([emailValue[0], false]);
    //   isValid = false;
    // }
    //
    // // Check company name
    // if (!companyNameValue[0].trim()) {
    //   setCompanyNameValue([companyNameValue[0], false]);
    //   isValid = false;
    // }
    //
    // // Check industry name
    // if (!industryNameValue[0].trim()) {
    //   setIndustryNameValue([industryNameValue[0], false]);
    //   isValid = false;
    // }

    // If everything is valid, continue with submission
    if (isValid) {
      setTimeout(async () => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        try {
          throw new Error("Simulated failure.");
          // await addDoc(collection(db, "online-inquiries"), {
          //   firstName: firstNameValue[0],
          //   lastName: lastNameValue[0],
          //   email: emailValue[0],
          //   companyName: companyNameValue[0],
          //   industry: industryNameValue[0],
          //   plan: planValue,
          //   anythingElse: anythingElseValue[0],
          // });
          setFirstnameValue(["reset", true]);
          setLastNameValue(["reset", true]);
          setEmailValue(["reset", true]);
          setCompanyNameValue(["reset", true]);
          setIndustryNameValue(["reset", true]);
          setPlanValue("reset");
          setAnythingElseValue(["reset", true]);

          console.log("Successful");
          setSuccessState(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } catch (e) {
          console.error("Error: ", e);
          setSuccessState(false);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 10000);
        }
      }, 3000);
    }
  };

  return (
    <div className={style.container}>
      {isSubmitting || isSubmitted ? (
        <FormSubmission submitted={isSubmitted} successState={successState} />
      ) : (
        ""
      )}

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
              value={firstNameValue[0]}
              onChange={(e) => setFirstnameValue([e.target.value, true])}
              isValid={firstNameValue[1]}
            />
            <SmallTextInput
              title={"Last name *"}
              placeholder={"Smith"}
              value={lastNameValue[0]}
              onChange={(e) => setLastNameValue([e.target.value, true])}
              isValid={lastNameValue[1]}
            />
          </div>
          <div className={style.bottomContainer}>
            <LargeTextInput
              title={"Email *"}
              placeholder={"johnsmith@gmail.com"}
              value={emailValue[0]}
              onChange={(e) => setEmailValue([e.target.value, true])}
              isValid={emailValue[1]}
            />
            <LargeTextInput
              title={"Company name *"}
              placeholder={"J's Extermination"}
              value={companyNameValue[0]}
              onChange={(e) => setCompanyNameValue([e.target.value, true])}
              isValid={companyNameValue[1]}
            />
            <LargeTextInput
              title={"Industry *"}
              placeholder={"Pest Control"}
              value={industryNameValue[0]}
              onChange={(e) => setIndustryNameValue([e.target.value, true])}
              isValid={industryNameValue[1]}
            />
            <PlanDropdown
              value={planValue}
              onChange={(plan) => setPlanValue(plan)}
            />
            <LargeTextInput
              title={"Anything else?"}
              placeholder={"I need a nice website."}
              value={anythingElseValue[0]}
              onChange={(e) => setAnythingElseValue([e.target.value, true])}
              isValid={anythingElseValue[1]}
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
