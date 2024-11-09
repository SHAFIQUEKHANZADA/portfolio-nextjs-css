"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import '../../../styles/newbtn.css'
 
export function AnimatedButton({ isHovered }: any) {
  return (
    <div className="firstDivContain">
      <button className="myBtn">
        {/* Text */}
        <span
          className={`firstSpan ${
            isHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          Live Preview
        </span>

        {/* Icon */}
        <span
          className={`secSpan ${
            isHovered ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <FaLocationArrow />
        </span>
      </button>
    </div>
  );
}
