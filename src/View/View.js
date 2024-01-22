import Navigo from "navigo";

const render = (parentEl, component) => {
  document.querySelector(parentEl).innerHTML = component();
};

const router = new Navigo("/", { linksSelector: "a" });

export { render, router };

export default class View {
  render(parentEl, component) {}
}
