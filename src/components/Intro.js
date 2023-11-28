import React from "react"
import Typed from "react-typed"
import ParticlesBackground from "./ParticlesBackground";

function Intro(props) {

  const HeaderTitleTypeAnimation = React.memo((props) => {
    return <Typed
      className="intro-text-slider"
      strings={props.titles}
      typeSpeed={80}
      backDelay={1100}
      backSpeed={30}
      loop
    />

  }, (props, prevProp) => true);

  return (
    <div id="IntroBackground">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div id="ParticleContainer" className="container">
            <ParticlesBackground/> 
            <div id="ParticleText">
            <h1 className="intro-title mb-4">Hello, I am {props.info.firstName}</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <HeaderTitleTypeAnimation titles={props.info.titles} />
              </strong>
            </p>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Intro;

