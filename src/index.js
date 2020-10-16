import React from "react";
import ReactDOM from "react-dom";

//import css in order
import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "lightbox2/dist/css/lightbox.min.css";
import "./style.css";

//import js libraries
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";

//import components
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Blogs from "./components/blogs.jsx";
import Contact from "./components/contact.jsx";
import ReactGA from "react-ga";
import Skills from "./components/skills";
ReactGA.initialize("UA-133322079-01");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Blogs />
        <Contact />
      </>
    );
  }
}

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
