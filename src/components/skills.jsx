import React from "react";
import myImage from "../img/myImage.png";

//icons import
import {
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";

class Skills extends React.Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt3 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
                <p className="subtitle-a">Check My Skills</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row flex justify-between">
            <div className="col-sm-12">
              <div className="row skills-icons flex justify-between">
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <SiHtml5 />
                  <span className="title-s pt-4">HTML</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <DiCss3 />
                  <span className="title-s pt-4">CSS</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <SiJavascript />
                  <span className="title-s pt-4">JavaScript</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <FaNodeJs />
                  <span className="title-s pt-4">Node</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <SiMongodb />
                  <span className="title-s pt-4">Mongodb</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <FaReact />
                  <span className="title-s pt-4">React</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <SiRedux />
                  <span className="title-s pt-4">Redux</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <SiTailwindcss />
                  <span className="title-s pt-4">Tailwind CSS</span>
                </div>
                <div className="col-sm-3 skill-card flex justify-center items-center flex-col py-5 my-4 bg-light box-shadow-full">
                  <SiTailwindcss />
                  <span className="title-s pt-4">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
