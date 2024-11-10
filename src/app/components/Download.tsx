"use client";
import React from "react";
import { FaDownload } from "react-icons/fa";
import "../../../styles/download.css"

interface DownloadButtonProps {
  isHovered: boolean;
  fileUrl: string;  
}

export function DownloadButton({ isHovered, fileUrl }: DownloadButtonProps) {
  // Function to handle file download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mainDown">
      <button
        onClick={handleDownload}
        className="downBtn"
      >
        {/* Text */}
        <span
          className={`downText ${
            isHovered ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          Download CV
        </span>

        {/* Icon */}
        <span
          className={`downIcon ${
            isHovered ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <FaDownload />
        </span>
      </button>
    </div>
  );
}
