"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./navbar.module.css";
import theme from "@/app/theme";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
  const router = useRouter(); // Initialize the router object
  const [hoveredLinks, setHoveredLinks] = useState({});

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll on body
    } else {
      document.body.style.overflow = "";
    }
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = pathname + searchParams.toString();
    setCurrentPath(url);
  }, [pathname, searchParams]);

  const onLinkClick = (url) => {
    if (isMenuOpen) {
      router.push(url);
      setTimeout(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }, 180);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredLinks({ ...hoveredLinks, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setHoveredLinks({ ...hoveredLinks, [id]: false });
  };

  return (
    <div
      className={style.container}
      style={{
        backgroundColor: theme.white,
        borderColor: isMenuOpen ? theme.grey : "transparent",
      }}
    >
      <button
        onClick={() => {
          setCurrentPath("/");
        }}
        className={style.logo}
      >
        <Link style={{ color: theme.black }} href={"/"} className={style.logo}>
          necti
        </Link>
      </button>
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
          <button
            onMouseEnter={() => handleMouseEnter(link.id)}
            onMouseLeave={() => handleMouseLeave(link.id)}
            key={link.id}
            onClick={() => {
              setCurrentPath(link.url);
            }}
          >
            <Link
              style={{
                color: hoveredLinks[link.id] ? theme.primaryColor : theme.black,
                borderColor:
                  currentPath === link.url ? theme.primaryColor : theme.white,
              }}
              key={link.id}
              href={link.url}
              className={style.link}
            >
              {link.title}
            </Link>
          </button>
        ))}
        <a
          style={{
            backgroundColor: theme.primaryColor,
            borderColor: theme.primaryColor,
            color: theme.white,
          }}
          className={style.headerButton}
          href={"https://billing.stripe.com/p/login/9AQ165a5p6Qs01i288"}
          target={"_blank"}
        >
          <p>Portal</p>
        </a>
      </div>
      {isMenuOpen && (
        <div
          style={{ backgroundColor: theme.white }}
          className={style.mobileHeader}
        >
          {links.map((link) => (
            <button
              style={{ borderColor: theme.grey, color: theme.black }}
              onClick={() => onLinkClick(link.url)}
              className={style.linkMobile}
              key={link.id}
            >
              {/*<Link*/}
              {/*  style={{ borderColor: theme.grey }}*/}
              {/*  href={link.url}*/}
              {/*  // className={style.linkMobile}*/}
              {/*>*/}
              {link.title}
              {/*</Link>*/}
            </button>
          ))}
          <a
            style={{
              backgroundColor: theme.primaryColor,
              borderColor: theme.primaryColor,
              color: theme.white,
            }}
            className={style.headerButton}
            href={"https://billing.stripe.com/p/login/9AQ165a5p6Qs01i288"}
            target={"_blank"}
          >
            <p>Portal</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
