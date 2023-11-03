"use client";

import React, { useState } from "react";
import style from "./plandropdown.module.css";
import theme from "@/app/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const PlanDropdown = (props) => {
  const currentPlan = props.value || "Please select...";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([
    "Please select...",
    400,
    theme.darkGrey,
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (plan, fontWeight, color) => {
    setSelectedPlan([plan, fontWeight, color]);
    setIsOpen(false);
    props.onChange && props.onChange(plan);
  };

  return (
    <div className={style.container}>
      <label className={style.label}>Plan</label>
      <div
        style={{ borderColor: theme.grey }}
        className={style.dropdown}
        onClick={toggleDropdown}
      >
        <p
          style={{
            color: selectedPlan[2],
            fontWeight: selectedPlan[1],
          }}
        >
          {selectedPlan[0]}
        </p>
        <span className={style.icon}>
          {isOpen ? (
            <FontAwesomeIcon
              style={{ color: theme.primaryColor }}
              icon={faChevronUp}
            />
          ) : (
            <FontAwesomeIcon
              style={{ color: theme.primaryColor }}
              icon={faChevronDown}
            />
          )}
        </span>
      </div>
      {isOpen && (
        <ul style={{ borderColor: theme.grey }} className={style.menu}>
          <li
            onClick={() =>
              handleOptionClick("Website Starter", 600, theme.black)
            }
          >
            Website Starter
          </li>
          <li
            onClick={() => handleOptionClick("Website Pro", 600, theme.black)}
          >
            Website Pro
          </li>
          <li
            onClick={() =>
              handleOptionClick("Website Advanced", 600, theme.black)
            }
          >
            Website Advanced
          </li>
        </ul>
      )}
    </div>
  );
};

export default PlanDropdown;
