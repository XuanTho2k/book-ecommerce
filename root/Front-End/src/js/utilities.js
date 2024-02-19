import Navigo from "navigo";

const render = (parentEl, component) => {
  document.querySelector(parentEl).innerHTML = component();
};

const router = new Navigo("/", { linksSelector: "a", hash: true });

const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.message} ${res.status}`);
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
export { render, router, getJSON };
