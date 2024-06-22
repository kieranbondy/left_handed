import React from "react";
import Header from "../Header/Header";
import temp from "../../resources/work/mustache-259848-H-2023 1.png";
import joyland from "../../resources/work/joyland-bike-scaled 1.png";
import mowgli from "../../resources/work/mogul-mowgli-slide-1 1.png";
import flee from "../../resources/work/flee-still-1_50653613031_o 1.png";
import goodbye from "../../resources/work/348822-Riz-Ahmed-x-WePresent-The-Long-Goodbye-Photos-by-Vicky-Grout-2-746866-original-1583504087 1.png";
import Project from "./Project/Project";
import "./Work.css";

export default function Work() {
  return (
    <div>
      <Header current='work'></Header>
      <div className="project-container">
        <div className="row">
          <Project
            projectWidth={"55%"}
            backgroundImage={temp}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
          <Project
            projectWidth={"45%"}
            backgroundImage={joyland}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
        </div>
        <div className="row">
          <Project
            projectWidth={"38%"}
            backgroundImage={mowgli}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
          <Project
            projectWidth={"25%"}
            backgroundImage={flee}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
          <Project
            projectWidth={"37%"}
            backgroundImage={goodbye}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
        </div>
        <div className="row">
          <Project
            projectWidth={"55%"}
            backgroundImage={temp}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
          <Project
            projectWidth={"45%"}
            backgroundImage={joyland}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
        </div>
        <div className="row">
          <Project
            projectWidth={"38%"}
            backgroundImage={mowgli}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
          <Project
            projectWidth={"25%"}
            backgroundImage={flee}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
          <Project
            projectWidth={"37%"}
            backgroundImage={goodbye}
            title={"The Sound of Metal"}
            year={"2020"}
            info={
              "In Christos Nikou’s debut feature in the English language, Anna (Jessie Buckley) increasingly suspects that her relationship with her longtime partner Ryan (Jeremy Allen White) may not actually be the real thing. In an attempt to improve things, she secretly embarks on a new assignment as an assistant to Amir (Riz Ahmed) working at a mysterious institute designed to incite and test the presence of romantic love in increasingly desperate couples."
            }
          ></Project>
        </div>
      </div>
    </div>
  );
}
