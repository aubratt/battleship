import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  element.textContent = "Template";

  return element;
}

document.body.appendChild(component());
