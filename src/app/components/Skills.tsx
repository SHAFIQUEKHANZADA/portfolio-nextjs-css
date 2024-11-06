"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiLogoFlask,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa"; // Import icons from react-icons
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAzuredevops,
  SiFastapi,
  SiKubernetes,
  SiLangchain,
  SiNumpy,
  SiPytorch,
  SiTerraform,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import "../../../styles/skills.css"

const Skill = ({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative skill-container lg:w-[100px] lg:h-[50px] w-[70px] h-[35px] rounded-md   border-black dark:border-white dark:text-white text-base overflow-hidden"
    >
      {/* Text */}
      <span
        className={`absolute inset-0 flex items-center justify-center lg:text-xs text-[10px] font-light transform transition-transform duration-300 ${
          isHovered ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {name}
      </span>

      {/* Icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center lg:text-xs text-[10px] font-light transform transition-transform duration-300 ${
          isHovered ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Icon size={25} />
      </span>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of the animation
      easing: "ease", // Easing function for the animation
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <div className="main">My <span className="mainSpan">Skills</span>
      </div>

    <div className="mainInnerOne">
      <div data-aos="zoom-out-up" className="sections">
      <h1 className="sectionsH1s">Web Development</h1>
      <div className="secInnerDivs">
        <Skill name="HTML" icon={FaHtml5} />
        <Skill name="CSS" icon={FaCss3Alt} />
        <Skill name="JavaScript" icon={FaJsSquare} />
        <Skill name="TypeScript" icon={BiLogoTypescript} />
        <Skill name="Nodejs" icon={DiNodejs} />
        <Skill name="React" icon={FaReact} />
        <Skill name="Nextjs" icon={RiNextjsFill} />
        <Skill name="Tailwind CSS" icon={RiTailwindCssFill} />
        <Skill name="Python" icon={FaPython} />
        <Skill name="Fast API" icon={SiFastapi} />
        <Skill name="Postgresql" icon={BiLogoPostgresql} />
      </div>
      </div>
      <div data-aos="zoom-out-up" className="sections">
      <h1 className="sectionsH1s">Cloud Computing</h1>
      <div className="secInnerDivs">
        <Skill name="Docker" icon={FaDocker} />
        <Skill name="Kubernetes" icon={SiKubernetes} />
        <Skill name="AWS" icon={FaAws} />
        <Skill name="Terraform" icon={SiTerraform} />
        <Skill name="DevOps" icon={SiAzuredevops} />
      </div>
      </div>
      <div data-aos="zoom-out-up" className="sections">
      <h1 className="sectionsH1s">Generative AI</h1>
      <div className="secInnerDivs">
        <Skill name="Python" icon={FaPython} />
        <Skill name="Numpy" icon={SiNumpy} />
        <Skill name="Flask" icon={BiLogoFlask} />
        <Skill name="Langchain" icon={SiLangchain} />
        <Skill name="Pytorch" icon={SiPytorch} />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
