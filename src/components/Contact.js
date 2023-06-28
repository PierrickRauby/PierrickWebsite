import React from "react"
import Typed from "react-typed"
function Contact() {
  return (
      <div className="ContactSection">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Pierrick</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                  className="intro-text-slider"
                    strings={[
                     "Senior Application Engineer",
                      "Embedded Software Engineer",
                      "Runner",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      );
   }

      export default Contact;

