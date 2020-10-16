import React from "react";
import { v4 as uuid } from "uuid";
import { projects } from "../data";
import { SiGithub } from "react-icons/si";
import { MdLink } from "react-icons/md";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: null,
    };
  }
  componentDidMount() {
    this.setState({ projectsData: [...projects] });
  }

  handleHover = (id) => {
    const filtered = this.state.projectsData.map((project) => {
      if (project.id === id) {
        project.isLinkVisible = !project.isLinkVisible;
      }
      return project;
    });
    this.setState({ projectsData: filtered });
  };

  // handleFilter = (category) => {
  //   console.log("Hi");
  //   this.state.projectsData.map((project) => {
  //     if (project.category === category) {
  //       project.isLinkVisible = !project.isLinkVisible;
  //     }
  //     return project;
  //   });
  //   this.setState({ activeProjectTab: "" });
  // };

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
            {/* <div className="flex justify-center filter-btn-sec">
              <button className="filter-btn mb-4 mr-2 filter-btn-active">
                All
              </button>
              <button
                className="filter-btn mb-4 mr-2"
                onClick={() => this.handleFilter("react")}
              >
                React
              </button>
              <button
                className="filter-btn mb-4 mr-2"
                onClick={() => this.handleFilter("node")}
              >
                Node
              </button>
              <button
                className="filter-btn mb-4 mr-2"
                onClick={() => this.handleFilter("javascript")}
              >
                JavaScript
              </button>
              <button
                className="filter-btn mb-4 mr-2"
                onClick={() => this.handleFilter("html-css")}
              >
                HTML and CSS
              </button>
            </div> */}
            <div className="row flex projects-row">
              {this.state.projectsData &&
                this.state.projectsData.map((project) => {
                  return (
                    <div className="project-card" key={uuid()}>
                      <div className="work-box">
                        <div className="work-img">
                          <img
                            src={project.image}
                            alt="project-img"
                            className="img-fluid card-image"
                            onMouseEnter={() => {
                              return this.handleHover(project.id);
                            }}
                          />
                          {project.isLinkVisible ? (
                            <>
                              <div
                                className="dis-none"
                                onMouseLeave={() => {
                                  return this.handleHover(project.id);
                                }}
                              >
                                <div className="button-container">
                                  <div className="flex items-center">
                                    {project.demoLink ? (
                                      <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-btn"
                                      >
                                        <SiGithub />
                                      </a>
                                    ) : (
                                      false
                                    )}
                                    {project.demoLink ? (
                                      <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-btn"
                                      >
                                        <MdLink />
                                      </a>
                                    ) : (
                                      false
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            false
                          )}
                        </div>
                        <div className="work-content">
                          <div className="row">
                            <div className="col-sm-12 text-justify px-3">
                              <h2 className="w-title">{project.title}</h2>
                              <div className="w-more">
                                <p>{project.description}</p>
                                <span className="w-ctegory">
                                  {project.techs}
                                </span>
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
