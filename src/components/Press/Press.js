import React from "react";
import Header from "../Header/Header";
import variety from "../../resources/variety.png";
import deadline from "../../resources/deadline.png";
import "./Press.css";
export default function Press() {
  return (
    <div>
      <Header current={"press"}></Header>
      <div className="press-container">
        <img src={variety} alt={variety}></img>
        <div className="article-container">
          <div>
            <div className="article-header">
              Why Riz Ahmed’s Left Handed Films Employs ‘Radical Vulnerability’
              as Its Business Strategy
            </div>
            <div className="author"> Variety</div>
          </div>
          <div className="read-full">
            <a href="google.com">Read Full Article</a>
          </div>
        </div>
      </div>
      <div className="press-container">
      <div className="article-container2">
          <div>
            <div className="article-header">
              ‘Mustache’: Riz Ahmed & His Left Handed Films Board Imran J.
              Khan’s SXSW Prize Winner As EPs
            </div>
            <div className="author"> Deadline</div>
          </div>
          <div className="read-full">
            <a href="google.com">Read Full Article</a>
          </div>
        </div>
        <img src={deadline} alt={"test"}></img>
      </div>
      <div className="press-container">
        <img src={variety} alt={variety}></img>
        <div className="article-container">
          <div>
            <div className="article-header">
              Why Riz Ahmed’s Left Handed Films Employs ‘Radical Vulnerability’
              as Its Business Strategy
            </div>
            <div className="author"> Variety</div>
          </div>
          <div className="read-full">
            <a href="google.com">Read Full Article</a>
          </div>
        </div>
      </div>
      <div className="press-container">
      <div className="article-container2">
          <div>
            <div className="article-header">
              ‘Mustache’: Riz Ahmed & His Left Handed Films Board Imran J.
              Khan’s SXSW Prize Winner As EPs
            </div>
            <div className="author"> Deadline</div>
          </div>
          <div className="read-full">
            <a href="google.com">Read Full Article</a>
          </div>
        </div>
        <img src={deadline} alt={"test"}></img>
      </div>
    </div>
  );
}
