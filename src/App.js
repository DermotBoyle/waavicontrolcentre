import React from "react";
import "./App.scss";
import catimg from "./images/imgcat1.jpeg";
import Duplicate from "./svg/duplicate";
import Add from "./svg/add";
import Orange from "./svg/orange";
import Archive from "./svg/archive";
import Edit from "./svg/edit";
import View from "./svg/view";
import { useSpring, animated } from "react-spring";
import ProgressBar2 from "./progressBar2";
import ProgressBar3 from "./ProgressBar3";

const App = () => {
  const props = useSpring({
    to: { width: "100px" },
    from: { width: "0px" },
    config: { tension: 200, friction: 60 }
  });
  return (
    <>
      <div className="Wrapper">
        <div className="Container">
          <div className="component1">
            <img className="catimg" src={catimg}></img>
            <div className="title1">
              <h3> Lorem ipsum</h3>
              <p>Description</p>
            </div>
            <div className="date">
              <h4>17/09/2019</h4>
              <p>08:05</p>
            </div>
            <div className="fasesContainer">
              <div className="component1progress1">
                <animated.div className="progressNumberContainer" style={props}>
                  <p className="progressNumber">01</p>
                </animated.div>
                <p className="progressPerCent">50%</p>
              </div>
              <div className="addContainer">
                <Add></Add>
              </div>
              <div className="addContainer">
                <Orange></Orange>
              </div>
            </div>

            <div className="toolboxContainer">
              <a href="/" className="borderDuplicate">
                <Duplicate></Duplicate>
              </a>
              <a href="/">
                <Edit></Edit>
              </a>
              <a href="/">
                <Archive />
              </a>
              <a href="/">
                <View />
              </a>
            </div>
          </div>

          <div className="component2">
            <img className="catimg" src={catimg}></img>
            <div className="title2">
              <h3> Lorem ipsum</h3>
              <p>Description</p>
            </div>
            <div className="date">
              <h4>17/09/2019</h4>
              <p>08:05</p>
            </div>
            <div className="fasesContainer">
              <div className="component2progress1">
                <p className="progressNumber">01</p>
              </div>
              <div className="component2progress2">
                <ProgressBar2
                  className="progressNumberContainer2"
                  style={props}
                >
                  <p className="progressNumber" style={{ marginLeft: "8px" }}>
                    02
                  </p>
                </ProgressBar2>
                <p style={{ marginRight: "8px", color: "#5c5dff" }}>25%</p>
              </div>
              <div className="addContainer">
                <Orange></Orange>
              </div>
            </div>

            <div className="toolboxContainer">
              <a href="/" className="borderDuplicate">
                <Duplicate></Duplicate>
              </a>
              <a href="/">
                <Edit />
              </a>
              <a href="/">
                <Archive></Archive>
              </a>
              <a href="/">
                <View />
              </a>
            </div>
          </div>
          <div className="component3">
            <img className="catimg" src={catimg}></img>
            <div className="title3">
              <h3> Lorem ipsum</h3>
              <p>Description</p>
            </div>
            <div className="date">
              <h4>17/09/2019</h4>
              <p>08:05</p>
            </div>
            <div className="fasesContainer">
              <div className="component3progress1">
                <p className="progressNumber">01</p>
              </div>
              <div className="component3progress2">
                <p className="progressNumber">02</p>
              </div>
              <div className="component3progress3">
                <ProgressBar3 className="progressNumContainer">
                  <p className="progressNumber">03</p>
                </ProgressBar3>
                <p
                  className="progressPerCent"
                  style={{ color: "rgb(232, 188, 0)" }}
                >
                  30%
                </p>
              </div>
            </div>
            <div className="toolboxContainer">
              <a href="/" className="borderDuplicate">
                <Duplicate></Duplicate>
              </a>
              <a href="/">
                <Edit />
              </a>
              <a href="/">
                <Archive></Archive>
              </a>
              <a href="/">
                <View />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
