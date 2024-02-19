import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Cart from "../components/cart";
import ProductDetail from "../components/productDetail";
import data from "../components/data.json" assert { type: "json" };
import Description from "../components/description";
const sixBooks = data.books.slice(0, 6);
const Product = function () {
  return /*html*/ `
        ${HeaderComponent()}
        <div class="bg-[#fafafa] w-screen h-[2.5rem]"></div>
        ${ProductDetail(data.books[0])}
        <div class="flex flex-col gap-[1.56rem] ml-[18rem] mt-[3.4rem]">
      <p class="text-[1.25rem] font-roboto">Sản Phẩm Tương Tự</p>
      <div class="flex flex-row gap-[1.5rem]">
        
        ${sixBooks.map(function (book) {
          return Cart(book);
        })}
      </div>
    </div> 
        ${Description(data.books[0])}
        ${FooterComponent()}
    `;
};
export default Product;
