"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import theme from "@/app/theme";

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
    title: "Blog",
    url: "/blog",
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
  return (
    <div className={styles.container} style={{ backgroundColor: theme.white }}>
      <Link style={{ color: theme.black }} href={"/"} className={styles.logo}>
        necti
      </Link>
      <div style={{ color: theme.black }} className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
