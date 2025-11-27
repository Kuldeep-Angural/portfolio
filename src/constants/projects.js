import mmeditrustimage from "../images/projectsImages/meditrust.png";
import RockPaperScisior from "../images/projectsImages/RockPaperScisiorGame.png";
import MariZameen from "../images/projectsImages/Screenshot 2024-07-20 150833.png";
import victual from "../images/projectsImages/victual.png";
import snapNab from "../images/snapNab.png";

export const projects = [
  {
    name: "Meditrust",
    info: "Meditrust is an internal hospital management application designed to streamline patient workflows, staff operations, and hospital administration. Built with a fully responsive UI and modern technologies.",
    techStack: ["react-js", "node-js", "express-js", "mui", "typescript"],
    image: mmeditrustimage,
    link: "https://meditrust-ui.vercel.app/",
  },
  {
    name: "MeriZameen",
    info: "Merizameen is an innovative real estate web application designed to streamline the process of buying, selling, and renting properties. The platform aims to provide users with a seamless experience by integrating advanced search functionalities, detailed property listings, and interactive infos.",
    techStack: [
      "React-js",
      "Node-js",
      "Express-js",
      "MongoDb",
      "Redux-Toolkit",
      "Cron-Jobs",
      "Node-Mailer",
      "Pasport-js",
      "JavaScript",
      "Material-UI",
    ],
    image: MariZameen,
    link: "https://github.com/KuldeepKumarAngural/MeriZameen_RealEstate_Mini_WebProject.git",
    webLink: "https://merizameen.vercel.app",
  },

  {
    name: "The Victual",
    info: 'TheVictual is an innovative online grocery store designed to revolutionize the way consumers shop for their everyday essentials. Leveraging cutting-edge technology, "The Victual" offers a seamless and convenient shopping experience, allowing customers to browse and purchase a wide range of groceries from the comfort of their homes',
    techStack: ["react-js", "Node-js", "mongoDb", "javaScript"],
    image: victual,
    link: "",
    webLink: "https://victual.vercel.app/",
  },

  {
    name: "web-game  Rock, Paper, Scissors",
    info: "Introducing RockPaperScissor, a fun and interactive web-based game that brings the classic game of Rock, Paper, Scissors to your fingertips. Designed with a sleek and intuitive interface, RockPaperScissor offers a seamless and engaging experience for players of all ages",
    techStack: ["Html", "Vanila-Css", "javaScript"],
    image: RockPaperScisior,
    link: "https://github.com/KuldeepKumarAngural/Rock-Paper-Scissors-Game.git",
  },

  {
    name: "SnapNab",
    info: "Introducing SnapNab, the ultimate web app for downloading high-quality images effortlessly and efficiently. SnapNab is designed to cater to photographers, designers, and anyone in need of stunning visuals with pristine clarity. With its user-friendly interface and powerful features, SnapNab makes accessing and downloading high-resolution images a breeze.",
    techStack: ["Html", "bootstrap", "react-js", "unsplash"],
    image: snapNab,
    webLink: "https://snapnab.vercel.app/",
    link: "https://github.com/KuldeepKumarAngural/Tesla_And_Iqoo_Web_Site_Langing_Page_clone.git",
  },
];
