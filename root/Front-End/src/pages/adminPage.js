import SideMenu from "../components/sideMenu";
import TableBook from "../components/tableBook";
import FromAddNewBook from "../components/formAddNewBooks";
import overLay from "../components/overlay";
import SuccessAlert from "../components/successAlert";
import { getAllBook } from "../js/model";

const AdminPage = function () {
  return /*html*/ `
  <div class="flex flex-row gap-[1rem]">
    ${SideMenu()} 
    ${TableBook()} 
   
</div>
${FromAddNewBook()}
${overLay()}
${SuccessAlert()}
    `;
};
getAllBook();
document.addEventListener("DOMContentLoaded", function () {
  const formAddBook = document.querySelector(".form-add-new-book");
  const overLay = document.querySelector(".overlay");
  const btn_add_book = document.querySelector(".btn-add-book");
  const formSubmit = document.querySelector(".form-submit");
  const success_alert = document.querySelector(".success_alert");
  const openFormAddBook = function () {
    if (!formAddBook !== undefined || !formAddBook !== null) {
      formAddBook.classList.remove("hidden");
    }
    overLay.classList.remove("hidden");
  };
  const closeFormAddBook = function () {
    if (!formAddBook !== undefined || !formAddBook !== null) {
      formAddBook.classList.add("hidden");
    }
    overLay.classList.add("hidden");
  };

  if (formAddBook && formAddBook && overLay) {
    overLay.addEventListener("click", closeFormAddBook);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !formAddBook.classList.contains("hidden")) {
        closeFormAddBook();
      }
    });
    if (btn_add_book !== undefined)
      btn_add_book.addEventListener("click", function (e) {
        openFormAddBook();
      });
  }
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookName = document.querySelector("#book_name").value;
    const bookPrice = document.querySelector("#book_price").value;
    const bookPrice_s = document.querySelector("#book_price-s").value;
    const bookImg = document.querySelector("#book_image").value;
    const bookRating = document.querySelector("#book_rating").value;
    const book_description = document.querySelector("#book_description").value;
    const book_active = document.querySelector("#book_active").value;

    let newProduct = {
      name: bookName,
      original_price: bookPrice,
      list_price: bookPrice_s,
      images: bookImg,
      rating_average: bookRating,
      short_description: book_description,
      isHidden: book_active,
    };
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        formSubmit.reset();
        closeFormAddBook();
        success_alert.classList.remove("hidden");
        setTimeout(() => {
          success_alert.classList.add("hidden");
        }, 6000);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error:", error);
      });
  });
});

/*

*/
export default AdminPage;
