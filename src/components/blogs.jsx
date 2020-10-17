import React from "react";
import { blogs } from "../data";
import { v4 as uuid } from "uuid";

class Blogs extends React.Component {
  render() {
    return (
      <section id="blog" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Blogs</h3>
                <p className="subtitle-a">Check Out My Blogs.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {blogs.map((blog) => {
              return (
                <div className="col-md-4 flex" key={uuid()}>
                  <div className="work-box blog-card">
                    <div className="work-img">
                      <img
                        src={blog.image}
                        alt="blog-img"
                        className="img-fluid blog-image"
                      />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-12 text-justify px-3">
                          <h2 className="w-title">{blog.title}</h2>
                          <div className="w-more">
                            <p>{blog.description.substr(1, 180) + "..."}</p>
                            <a href={blog.link} class="title-s read-more-btn">
                              Read More
                            </a>
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
      </section>
    );
  }
}

export default Blogs;
