"use client";

import Link from "next/link";
import React, { useState } from "react";
import { DownloadButton } from "./Download";
import { TypewriterEffectDemo } from "./Typewriter";
import { GiCheckMark } from "react-icons/gi";
import { FloatingDockDemo } from "./Flooting";
import { SlSocialLinkedin } from "react-icons/sl";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { SiFiverr } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../../../styles/hero.css"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mainDiv">
      {/* left */}
      <div className="mainLeft">
        <h1 className="md:text-[5vw] lg:text-7xl text-5xl lg:pt-10 font-extrabold leading-tight tracking-tight scroll-m-20">
          <span className="text-orange-600">Hello,</span> my name is{" "}
          <span className="xyz font-extrabold">Shafique Ur Rehman</span> And i
          am{" "}
          <span>
            <TypewriterEffectDemo />
          </span>{" "}
        </h1>
        <div className="py-8">
          <div className="flex items-center gap-3 mt-10">
            <GiCheckMark className="tick text-xl mt-3" />
            <p className="leading-7 [&:not(:first-child)]:mt-4 tracking-wide">
              Get fast, SEO-friendly web apps built with the latest technologies
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GiCheckMark className="tick text-xl mt-2" />
            <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide">
              Seamlessly integrate powerful APIs to scale your business
              effortlessly
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GiCheckMark className="tick text-xl mt-2" />
            <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide">
              Optimize your infrastructure with automated pipelines
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GiCheckMark className="tick text-xl mt-2" />
            <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide">
              Leverage cutting-edge AI to create intelligent, responsive
              applications
            </p>
          </div>
        </div>
        <div
          className="inline-block mt-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <DownloadButton
            isHovered={isHovered}
            fileUrl="/path/to/your/file.pdf"
          />
        </div>
      </div>

      <div className="seprateLine"></div>

      {/* right */}
      <div className="mainRight">
        <h1 className="mainRightH1">
          Connect <span className="mainRightH1Span">With Me</span>
        </h1>
        <div className="flotDiv">
          <FloatingDockDemo />
        </div>

        <div className="mainSocialDiv">
        <Link href={"https://www.linkedin.com/in/shafique-ur-rehman-b7b859299/"} passHref>  <div className="mainIcons">
            <SlSocialLinkedin className="text-2xl" />
          </div> </Link>

        <Link href={"https://github.com/SHAFIQUEKHANZADA"}>  <div className="mainIcons">
            <IconBrandGithub className="text-xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="mainIcons">
            <SiFiverr className="text-2xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="mainIcons">
            <FaFacebookF className="text-2xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="mainIcons">
            <FaInstagram className="text-2xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="mainIcons">
            <IconBrandX className="text-xl" />
          </div> </Link>
        </div>

        <p className="rightPara">
          Explore my professional profiles across various platforms to dive
          deeper into my work, projects, and activities. Stay updated with my
          latest achievements and connect with me for potential collaborations
          and opportunities.
        </p>
        <div className="rightInnerDiv">
          <div className="rightInnerDivInner">
            <div className="rightInnerDivInnerAll">
              <GiCheckMark className="tick h-5 w-5" />
              <p className="innerAllPara">
                Connect with me on LinkedIn to follow my professional growth
              </p>
            </div>
            <div className="rightInnerDivInnerAll">
              <GiCheckMark className="tick h-5 w-5" />
              <p className="innerAllPara">
                Check out my GitHub for a showcase of my coding projects and
                open-source contributions
              </p>
            </div>
            <div className="rightInnerDivInnerAll">
              <GiCheckMark className="tick h-5 w-5" />
              <p className="innerAllPara">
                Visit my Fiverr to explore how I can bring your project to life
                with my freelance services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
