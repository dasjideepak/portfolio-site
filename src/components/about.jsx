import React from "react";

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">About Me</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-img col-sm-3 thumbnail flex items-center justify-center flex-col">
                    <img src="/images/myImage.png" alt="deepak-avatar" />
                    <h2 className="title-s text-center">
                      Deepak Sharma <br />
                    </h2>
                    <button className="cv-download-button flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="icon-download"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Download CV</span>
                    </button>
                  </div>
                  <div className="col-sm-9 col-md-9">
                    <div className="about-para">
                      <p>
                        I am a Full-Stack Developer and can efficiently code
                        websites and applications using modern JavaScript
                        frameworks and libraries like React, Redux, and tools
                        like webpack, Git, Babel, Hasura, and more in Front-end
                        and Node.js, Express.js, MongoDB, in the Backend.
                      </p>
                      <p>
                        I always like to write my code in modular ways so that
                        help other developers to understand it easily. Building
                        state-of-the-art, easy-to-use, user-friendly websites
                        and applications is truly a passion of mine and I am
                        confident I would be an excellent addition.
                      </p>
                      <p>
                        In addition to my knowledge base, I actively seek out
                        new technologies and stay up-to-date on industry trends
                        and advancements. It allows me to stay ahead of the
                        curve and deliver exceptional work. I am always
                        passionate about my work so it helps me to learn things
                        quickly and brings ownership to my work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
