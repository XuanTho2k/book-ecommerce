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

const handlerFilterHover = function (e) {
  if (e.target.classList.contains("filter__tab")) {
    const link = e.target;
    const opacityValue = this;

    filterTab.forEach((el) => {
      if (el !== link) el.style.opacity = opacityValue;
    });
  }
};

tabsContainer.addEventListener("mouseover", handlerFilterHover.bind(0.5));
tabsContainer.addEventListener("mouseout", handlerFilterHover.bind(1));

// sticky header
const header = document.querySelector("header");
const CategoryTab = document.querySelector(".category__tabs");
console.log(CategoryTab.style.y);
CategoryTab.style.y = "100px";
const initailCategoryTab = document
  .querySelector(".category__tabs")
  .getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY > initailCategoryTab.bottom) {
    header.classList.add("stickyy");
    CategoryTab.classList.add("category__sticky");
    CategoryTab.getBoundingClientRect().y = window.scrollY;
  } else {
    header.classList.remove("stickyy");
    CategoryTab.classList.remove("category__sticky");
  }
});

const allTabsContent = document.querySelectorAll(".filter__tab--content");
const revealTab = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("tab__product--hidden");
  observe.unobserve(entry.target);
};
const filterObserve = new IntersectionObserver(revealTab, {
  root: null,
  threshold: 0.2,
});

allTabsContent.forEach((pro) => {
  pro.classList.add("tab__product");
  pro.classList.add("tab__product--hidden");
  if (pro) filterObserve.observe(pro);
});

const footer = document.querySelector("footer");
const revealFooter = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("footer--hidden");
  observe.unobserve(entry.target);
};

const footerObserve = new IntersectionObserver(revealFooter, {
  root: null,
  threshold: 0.1,
});

footerObserve.observe(footer);

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  let curSlide = 0;
  const slidesMax = slides.length;
  const btnSlideLeft = document.querySelector(".slider__btn--left");
  const btnSlideRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  const goToSlide = function (slideNumber) {
    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${100 * (index - slideNumber)}%)`;
    });
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = slidesMax - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const nextSlide = function () {
    if (curSlide === slidesMax - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  const createDots = function () {
    slides.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        /*html*/ `
  <button class="dots__dot" data-slide="${index}" ></button>
  `
      );
    });
  };

  const activeDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    });
  };
  function init() {
    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${100 * index}%)`;
    });
    btnSlideLeft.addEventListener("click", prevSlide);
    btnSlideRight.addEventListener("click", nextSlide);
    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activeDot(slide);
      }
    });
    createDots();
    activeDot(0);
  }
  init();
};
slider();
