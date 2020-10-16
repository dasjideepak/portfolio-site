import React from "react";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image "
        style={{
          backgroundImage: "url(/images/bg.jpg)",
        }}
      >
        {/* <div className="overlay-intro"></div> */}
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">
                Hello, I am <span className="text-light">Deepak Sharma</span>
              </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Full Stack Developer",
                    ]}
                    typeSpeed={120}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#about"
                  role="button"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
