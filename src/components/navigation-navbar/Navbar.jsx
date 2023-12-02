"use client";

import React, { useState } from "react";
import Link from "next/link";
import style from "./navbar.module.css";
import theme from "@/app/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 5,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Solutions",
    url: "/solutions",
  },
  {
    id: 3,
    title: "Our Work",
    url: "/work",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dasbhoard",
  // },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll on body
    } else {
      document.body.style.overflow = "";
    }
  };

  const onLinkClick = () => {
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }, 100);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div
      className={style.container}
      style={{
        backgroundColor: theme.white,
        borderColor: isMenuOpen ? theme.grey : "transparent",
      }}
    >
      <Link style={{ color: theme.black }} href={"/"} className={style.logo}>
        necti
      </Link>
      <button
        onClick={toggleMenu}
        className={style.menuButton}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            className={style.mobileButton}
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            className={style.mobileButton}
            icon={faBars}
          />
        )}
      </button>
      <div style={{ color: theme.black }} className={style.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link}>
            {link.title}
          </Link>
        ))}
      </div>
      {isMenuOpen && (
        <div
          style={{ backgroundColor: theme.white }}
          className={style.mobileHeader}
        >
          {links.map((link) => (
            <button
              style={{ borderColor: theme.grey }}
              className={style.linkMobile}
              onClick={onLinkClick}
              key={link.id}
            >
              <Link
                style={{ borderColor: theme.grey }}
                href={link.url}
                className={style.linkMobile}
              >
                {link.title}
              </Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
