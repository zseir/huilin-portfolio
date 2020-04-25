// import Home from "./Containers/Home";
// import About from "./Containers/About";
// import Projects from "./Containers/Projects";
// import Contact from "./Containers/Contact";
import FED_Assignment from './Assets/FED_Assignment.jpg'
import foodtree from './Assets/foodtree.png'
import MAD_Recipes from './Assets/MAD_Recipes.jpeg'
import Patch from './Assets/Patch.png'
// export const navigation = [
//   { name: "Home", path: "/", component: Home },
//   { name: "About", path: "/about", component: About },
//   { name: "Projects", path: "/projects", component: Projects },
//   { name: "Contact", path: "/contact", component: Contact }
// ];

export const projectList = [
  {
    name: "FoodTree",
    description:
      "iOS application to target food wastage in Singapore - especially leftovers from the F&B industry.",
    image: foodtree,
    category: "School",
    language: "Swift",
    link: "https://github.com/huilynt/foodtree"
  },
  {
    name: "MADRecipes",
    description:
      "Android recipe management application to store and retrieve recipes in your phone! Includes with a shopping list and timer too.",
    image:
      MAD_Recipes,
    category: "School",
    language: "Java",
    link: "https://github.com/huilynt/MADRecipes",
    live: "https://play.google.com/store/apps/details?id=com.madrecipes.app.madrecipes&hl=gsw"
  },
  {
    name: "Patch",
    description:
      "Android application that encourages interaction - match up with other users who have similar hobbies and interests, connect & socialize with new friends.",
    image: Patch,
    category: "School",
    language: "Java",
    link: "https://github.com/huilynt/Patch/"
  },
  {
    name: "Community",
    description:
      "Basic front-end website to showcase some community centres of Singapore.",
    image: FED_Assignment,
    category: "School",
    language: "HTML, CSS, jQuery",
    link: "https://github.com/huilynt/FED_Assignment/",
    live: "https://huilynt.github.io/FED_Assignment/index.html"
  }
];
