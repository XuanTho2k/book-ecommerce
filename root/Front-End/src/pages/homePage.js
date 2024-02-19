import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import Category from "../components/category";
import SlideBanner from "../components/slides";
import Filter from "../components/filter";
import Cart from "../components/cart";
import Register from "../components/register";
import overLay from "../components/overlay";
import data from "../components/data.json" assert { type: "json" };
const books = data.books.slice(0, 16);
const category1 = data.books.slice(10, 20);
const category2 = data.books.slice(7, 17);
const category3 = data.books.slice(18, 28);
const category4 = data.books.slice(25, 30);
const HomePage = function () {
  return /*html*/ `

        ${HeaderComponent()}
        <div class="bg-[#fafafa] w-screen h-[2.5rem]"></div>
        <div class="flex flex-row gap-[7.5rem]">
        ${Category()}
        ${SlideBanner()}
        </div>
        ${Filter()}
        <div class="filter__tab--content filter__content--1 filter__tab-content--active">
        ${books.map(function (book) {
          return Cart(book);
        })}
        </div>
        <div class="filter__tab--content filter__content--2 ">
        ${category1.map(function (book) {
          return Cart(book);
        })}
        </div>
        <div class="filter__tab--content filter__content--3 ">
        ${category2.map(function (book) {
          return Cart(book);
        })}
        </div>
        <div class="filter__tab--content filter__content--4 ">
        ${category3.map(function (book) {
          return Cart(book);
        })}
        </div>
        <div class="filter__tab--content filter__content--5 ">
        ${category4.map(function (book) {
          return Cart(book);
        })}
        </div>
        ${Register()} 
        ${overLay()}
        ${FooterComponent()}
    `;
};
document.addEventListener("DOMContentLoaded", function () {
  const register = document.querySelector(".register");
  const overLay = document.querySelector(".overlay");
  const btn_register = document.querySelector(".btn--register");
  if (register && overLay && btn_register) {
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
      openRegister();
    });
  }
});

export default HomePage;
