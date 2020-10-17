import { v4 as uuid } from "uuid";

export let projects = [
  {
    id: uuid(),
    title: "Conduit - Blogging Web App",
    description:
      "A web app where users can add, update, delete and read articles, comment and upvote on articles, filter articles based on tags",
    techs: "React",
    githubLink: "https://github.com/dasjideepak/react-conduit-app",
    image: "/images/project-conduit (1).png",
    demoLink: "https://conduit-app.netlify.app/",
    category: "react",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "Producthunt UI Clone",
    description:
      "Product Hunt clone that is designed using React for practicing purpose, any user can add projects and data will be saved in the localstorage of browser",
    techs: "React",
    githubLink: "https://github.com/dasjideepak/producthunt-ui-react",
    image: "/images/project-producthunt (1).png",
    demoLink: "https://producthunt-ui-react.netlify.app/",
    category: "react",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "Todo List App",
    description:
      "A simple todos list, users can perform CRUD operations on this app",
    techs: "React",
    githubLink: "https://github.com/dasjideepak/todo-app-react",
    image: "/images/project-todo-app.png",
    demoLink: "https://todo-using-react.netlify.app/",
    category: "react",
    isLinkVisible: false,
  },
  // {
  //   id: uuid(),
  //   title: "Twitter Clone",
  //   description:
  //     "Product Hunt clone that is designed using React for practicing purpose, and also any user can add projects",
  //   techs: "React",
  //   githubLink: "https://github.com/dasjideepak/twitter-ui-react",
  //   image: "/images/project-twitter-clone.png",
  //   demoLink: "https://react-ui-twitter.netlify.app/",
  //   category: "react",
  //   isLinkVisible: false,
  // },
  {
    id: uuid(),
    title: "Git Command Explorer",
    description:
      "A Google Chrome Extension using this extension user can learn or revise git commands and this extension is designed using HTML CSS and Vanilla JavaScript",
    techs: "JavaScript",
    githubLink: "https://github.com/dasjideepak/git-command-explorer",
    image: "/images/project-git-exp (1).png",
    demoLink:
      "https://chrome.google.com/webstore/detail/command-explorer/gklippnbdpchhjdghhacebbchddkidml?utm_source=chrome-ntp-icon",
    category: "javascript",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "Any Body Can Help",
    description:
      "A charity website that is designed using HTML and CSS to help childs deprived of education due to financial constraints or other reasons.",
    techs: "HTML and CSS",
    githubLink: "https://github.com/dasjideepak/any-body-can-help",
    image: "/images/project-abch (1).png",
    demoLink: "https://dasjideepak.github.io/any-body-can-help/",
    category: "html-css",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "GPG Website",
    description:
      "Created a static website for Government Polytechnic Ghaziabad. It is live on https://gpghaziabad.ac.in/. It is part of my college project",
    techs: "HTML and CSS",
    image: "/images/project-gpg (1).png",
    demoLink: "https://www.gpghaziabad.ac.in/",
    category: "html-css",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "Triversity IAS",
    description:
      "Created a static website for a coaching institute. It is responsive in nature",
    techs: "HTML and CSS",
    image: "/images/project-triversity.png",
    githubLink: "",
    demoLink: "https://github.com/dasjideepak/triversity-ias-template",
    category: "html-css",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "Twitter Bot",
    description:
      "A Twitter Bot that shares awesome programming quotes every hour and likes the tweet of other users using some hashtags.",
    techs: "NodeJS",
    image: "/images/project-twitter-bot.png",
    githubLink: "",
    demoLink: "https://twitter.com/aws_quotes?s=08",
    category: "node",
    isLinkVisible: false,
  },
  {
    id: uuid(),
    title: "Shopping Cart",
    description:
      "A ecommerce web-app, admin can add products for users and user can add products to cart and check-out the final price",
    techs: "EJS, NodeJS, ExpressJS and MongoDB",
    image: "/images/project-shopping-card.png",
    githubLink: "https://github.com/dasjideepak/shopping-cart",
    category: "node",
    isLinkVisible: false,
  },
  //{
  // id: uuid()1,
  // title: "Reddit Clone",
  // description:
  //   "Reddit clone designed using HTML, CSS & JavaScript, Fetching data from Reddit API and showing to the user, user can search Reddit post using keyword",
  // techs: "JavaScript",
  // image: "/images/project-reddit-clone (1).png",
  // githubLink: "https://github.com/dasjideepak/js-reddit-clone",
  // demoLink: "https://dasjideepak.github.io/js-reddit-clone/",
  // category: "javascript",
  // isLinkVisible: false,
  //},
];

// twitter bot
export let blogs = [
  {
    title: "Cookies and Session",
    description:
      "An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user’s computer… ",
    link: "https://medium.com/@dasjideepak/cookies-and-session-1e5a7e02c6d1",
    image: "/images/blog1.jpg",
  },

  {
    title: "var, let, and Const",
    description:
      "When we declare a variable in JavaScript, we can declare using var, let and const keyword, In this article, we will discuss the difference among all of the three keywords used to declare a variable...",
    link:
      "https://medium.com/@dasjideepak/difference-between-var-let-and-const-952072b6fb89",
    image: "/images/blog2.png",
  },
  {
    title: "JavaScript Arrow Functions",
    description:
      "Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition, In this blog, we will learn about JavaScript Arrow Function ...",
    link:
      "https://medium.com/@dasjideepak/javascript-arrow-functions-e86c53fbf1b4",
    image: "/images/blog3.png",
  },
  {
    title: "An Introduction to JavaScript",
    description:
      "When most people start learning to code, they start with HTML and CSS. From there, they move on to JavaScript. It provides the functionality to the website and has become the most popular... ",
    link:
      "https://medium.com/@dasjideepak/an-introduction-to-javascript-1f6d0ef1922c",
    image: "/images/blog4.png",
  },
  {
    title: "CSS: Positioning Content",
    description:
      "Floats allow elements to appear next to, or apart from, one another. They provide the ability to build a natural flow within a layout and allow elements to interact with one another based on their.... ",
    link: "https://medium.com/@dasjideepak/",
    image: "/images/blog5.jpeg",
  },
  {
    title: "CSS Box Modal",
    description:
      "The CSS box model is a container that contains multiple properties including borders, margin, padding and the content itself. It is used to create the design and layout of web pages ... ",
    link: "https://medium.com/@dasjideepak/",
    image: "/images/blog6.png",
  },
];
