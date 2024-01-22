import Navigo from "navigo";

const render = (parentEl, component) => {
  document.querySelector(parentEl).innerHTML = component();
};

const router = new Navigo("/", { linksSelector: "a", hash: true });

export { render, router };
