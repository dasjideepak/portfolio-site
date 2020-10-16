import React from "react";
import { v4 as uuid } from "uuid";
import { projects } from "../data";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">Check Out My Latest Projects.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center filter-btn-sec">
              <button className="filter-btn mb-4 mr-2 filter-btn-active">
                All
              </button>
              <button className="filter-btn mb-4 mr-2">React</button>
              <button className="filter-btn mb-4 mr-2">Node</button>
              <button className="filter-btn mb-4 mr-2">JavaScript</button>
              <button className="filter-btn mb-4 mr-2">HTML and CSS</button>
            </div>
            <div className="row">
              {projects.map((project) => {
                return (
                  <div className="col-md-4" key={uuid()}>
                    <div className="work-box">
                      <div className="work-img">
                        <img
                          src={project.image}
                          alt="project-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-12 text-justify px-3">
                            <h2 className="w-title">{project.title}</h2>
                            <div className="w-more">
                              <p>{project.description}</p>
                              <span className="w-ctegory">{project.techs}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
