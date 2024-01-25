import "../css/style.css";
import Product from "../pages/product";
import HomePage from "../pages/homePage";
import { render, router } from "./utilities";

router.on("/", function () {
  render("#app", HomePage);
});

router.on("/product", function () {
  render("#app", Product);
});

router.resolve();

const register = document.querySelector(".register");
const overLay = document.querySelector(".overlay");
const btn_register = document.querySelector(".btn--register");
const openRegister = function () {
  register.classList.remove("hidden");
  overLay.classList.remove("hidden");
};
const closeRegister = function () {
  register.classList.add("hidden");
  overLay.classList.add("hidden");
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !register.classList.contains("hidden")) {
    closeRegister();
  }
});

overLay.addEventListener("click", closeRegister);
btn_register.addEventListener("click", function (e) {
  console.log("click");
  openRegister();
});

const filterTab = document.querySelectorAll(".filter__tab");
const tabsContainer = document.querySelector(".filter__tab-container");
const tabsContent = document.querySelectorAll(".filter__tab--content");

tabsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter__tab")) {
    filterTab.forEach((tab) => {
      tab.classList.remove("filter__tab--active");
    });
    e.target.classList.add("filter__tab--active");
    const contentActiveNumber = e.target.dataset.tab;
    tabsContent.forEach((tab) => {
      tab.classList.remove("filter__tab-content--active");
    });
    const contentActive = document.querySelector(
      `.filter__content--${contentActiveNumber}`
    );
    console.log(contentActive);
    contentActive.classList.add("filter__tab-content--active");
  }
});
