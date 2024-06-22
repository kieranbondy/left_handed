import React, { useEffect, useState } from "react";
import moustache from "../../resources/moustache.png";
import mogul from "../../resources/mogul.png";
import longgoodbye from "../../resources/longoodby.png";
import flee from "../../resources/Flee.png";
import joyland from "../../resources/joyland.png";
import "./Home.css";
import Header from "../Header/Header";
export default function Home() {
  let logos = [longgoodbye, flee, joyland, mogul, moustache];
  let titles = ["Long Goodbye", "Flee", "Joyland", "Mogul Mowgli", "Mustache"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(changeLogo, 5000);
    return () => clearInterval(interval);
  }, []);

  function changeLogo() {
    setIndex((prevIndex) => (prevIndex + 1) % logos.length);
  }
  return (
    <div>
      <Header></Header>
      <div className="home-container">
        <div className="logo-container">
          <img src={logos[index]}></img>
            <div className="info-container">
              <div className="title-text">{titles[index]}</div>
            </div>
            <div className="info-container">
              <div className="text">{"Description Here"}</div>
            </div>
        </div>
      </div>
    </div>
  );
}
