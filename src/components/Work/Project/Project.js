import React, { useState } from "react";
import "./Project.css";

export default function Project(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        width: props.projectWidth,
        backgroundImage: `url("${props.backgroundImage}")`,
        backgroundSize: "cover", // Ensure the background image covers the entire div
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat" // Prevent the background image from repeating
      }}
    >
      {isHovered && (
        <div
          style={{ backgroundColor: "hsla(0, 0%, 0%, 0.7)" }}
          className="container"
        >
          <div className="header">
            <div className="title">{props.title}</div>
            <div className="year">{props.year}</div>
          </div>
          <div className="content">
            <div className="info">{props.info}</div>
          </div>
        </div>
      )}
    </div>
  );
}
