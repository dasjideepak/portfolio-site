import React from "react";

// icons import
import {
  SiGraphql,
  SiPostgresql,
  SiSass,
  SiWebpack,
  SiBabel,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";

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
          <div className="row">
            <div className="col-sm-12">
              <div className="row flex justify-between skills-icons">
                <div className="flex justify-center items-center flex-col  my-4 bg-light skill-card">
                  <SiHtml5 />
                  <span className="title-s pt-4">HTML</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <DiCss3 />
                  <span className="title-s pt-4">CSS</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiJavascript />
                  <span className="title-s pt-4">JavaScript</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <FaNodeJs />
                  <span className="title-s pt-4">Node</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <FaReact />
                  <span className="title-s pt-4">React</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiRedux />
                  <span className="title-s pt-4">Redux</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiMongodb />
                  <span className="title-s pt-4">Mongodb</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiPostgresql />
                  <span className="title-s pt-4">Postgres SQL</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiGraphql />
                  <span className="title-s pt-4">GraphQL</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiSass />
                  <span className="title-s pt-4">SCSS/SASS</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <FaGit />
                  <span className="title-s pt-4">Git</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiWebpack />
                  <span className="title-s pt-4">Webpack</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiBabel />
                  <span className="title-s pt-4">Babel</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <SiTailwindcss />
                  <span className="title-s pt-4">Tailwind CSS</span>
                </div>
                <div className="skill-card flex justify-center items-center flex-col  my-4 bg-light">
                  <AiOutlineCloudServer />
                  <span className="title-s pt-4">Deployment</span>
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
