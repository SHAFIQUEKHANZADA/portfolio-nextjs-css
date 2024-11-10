import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiFiverr } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../../../styles/floot.css"

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <SlSocialLinkedin className="mainFlootIcon" />
      ),
      href: "#",
    },
    {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="mainFlootIcon" />
        ),
        href: "#",
      },

    {
      title: "Fiverr",
      icon: (
        <SiFiverr className="mainFlootIcon" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <FaFacebookF className="mainFlootIcon" />
      ),
      href: "#",
    },
 
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="mainFlootIcon" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="mainFlootIcon" />
      ),
      href: "#",
    },

  ];
  return (
    <div className="flottingMainDiv">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
