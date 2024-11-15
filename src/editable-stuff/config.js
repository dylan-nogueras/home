// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dylan",
  middleName: "",
  lastName: "Nogueras",
  message: " Interested in learning and contributing to progress with the development of software. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/dylan-nogueras",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/DylanNL",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dnogueraslara/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/perfil.jpg"),
  imageSize: 375,
  message:
    "My name is Dylan Nogueras. I finished my Bachelor's Degree in Computer Science Engineering in 2020 at the University of Granada and the Technische Universität München. I also completed a Master's Degree in Computer Science Engineering in Granada in 2023.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "dylan-nogueras", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["LGTBIQA-Recommendations", "Refranator", "GatoEncerrado_TFG", "LGTBClub"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Hobbies",
  message:
    "I like bouldering and listening to music. I play the drums in a rock band. I also enjoy playing video games, traveling or meeting my friends. Other of my interests is my small collection of different Rubik's cubes. ",
  images: [
    { 
      img: require("../editable-stuff/landscape.jpg"), 
    },
    { 
      img: require("../editable-stuff/alhambra.jpg"), 
    },
    { 
      img: require("../editable-stuff/albaicin.jpg"), 
    },
  ],
  imageSize: {
    width:"620",
    height:"250"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Apex", value: 85 },
    { name: "C/C++", value: 60 },
    { name: "JavaScript", value: 50 },
    { name: "Java", value: 55 },
  ],
  softSkills: [
    { name: "Reliability", value: 85 },
    { name: "Problem Solving", value: 70 },
    { name: "Empathy", value: 90 },
    { name: "Attention to detail", value: 90 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions or offers, you can contact me here",
  email: "noguerasdylan@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
