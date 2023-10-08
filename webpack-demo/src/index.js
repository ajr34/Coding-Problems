import _ from "lodash";
import "./style.css";
// import myName from "./myName";

const component = () => {
  const element = document.createElement("div");

  // Lodash, now imported by this script;
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  // element.textContent = myName("AJ");

  // Add the image to our existing div

  return element;
};

document.body.appendChild(component());
