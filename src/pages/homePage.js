import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import Category from "../components/category";
import SlideBanner from "../components/slides";
import Filter from "../components/filter";
import Cart from "../components/cart";
import data from "../components/data.json" assert { type: "json" };
const books = data.books.slice(0, 16);
const HomePage = function () {
  return /*html*/ `

        ${HeaderComponent()}
        <div class="bg-[#fafafa] w-screen h-[2.5rem]"></div>
        <div class="flex flex-row gap-[7.5rem]">
        ${Category()}
        ${SlideBanner()}
        </div>
        ${Filter()}
        <div class="flex flex-row flex-wrap gap-[2rem] w-[66rem] mt-[4rem] ml-[38rem] mb-[36rem]">
        ${books.map(function (book) {
          return Cart(book);
        })}
        </div>

        ${FooterComponent()}
    `;
};

export default HomePage;
