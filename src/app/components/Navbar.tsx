"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { PopoverDemo } from "./PopOver";
import "../../../styles/nav.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="mainNav">
      <div className="mainInnerDiv">
        <div className="innerMainInner">
          <div className="innerMainInnerOne">
            <div className="inOneMainIn">
              <Link href="/">
           
                  <Image
                    src="/shaf.jpeg"
                    alt="Profile Picture"
                    height={100}
                    width={100}
                    className="firstImg"
                  />
              </Link>
              <PopoverDemo />
            </div>
            {/* Dark mode toggle button for mobile */}
            <button
              onClick={toggleDarkMode}
              className="togglemain"
            >
              {isDarkMode ? (
                <IoSunny className="ioSunny" />
              ) : (
                <IoMoonOutline className="ioMone" />
              )}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="mobMenu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="innerMainTwo">
            <button
              onClick={toggleDarkMode}
              className="btnTwo"
            >
              {isDarkMode ? (
                <IoSunny className="isSun" />
              ) : (
                <IoMoonOutline className="ioMone" />
              )}
            </button>
            <div className="linksMain">
              <Link
                href="/about"
                className="aboutLink"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="contactLink"
              >
                Contact
              </Link>
            </div>
            {/* Dark mode toggle button for desktop */}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="mainMobile">

          <div className="mobInnerMain">
            <Link
              href="/about"
              className="mobAbout"
            >
              About
            </Link>{" "}
            <br />
            <Link
              href="/contact"
              className="mobContact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
