import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "./icons/css/ionicons.css";
import "./style.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./libs/easing.js";

import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Blogs from "./components/blogs.jsx";
import Contact from "./components/contact.jsx";
import Skills from "./components/skills";

ReactDOM.render(
  <>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    <Portfolio />
    <Blogs />
    <Contact />
  </>,
  document.getElementById("root")
);
