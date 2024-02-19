import { getJSON } from "./utilities";
export const getAllBook = async function () {
  try {
    const data = await getJSON("http://localhost:3000/books");
    const listBookMarkup = document.querySelector(".list-all-books");
    const listCategories = document.querySelector(".categories");
    const listAuthors = document.querySelector(".authors");
    //data.map((e) => console.log(e));
    listBookMarkup.innerHTML = data.map((e) => {
      return /*html*/ `
      <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 list-all-books hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td class="w-[13rem] h-[13rem] px-6 py-4">
        <img
          src="${e.images[0].base_url}"
          class="max-w-full rounded-lg w-[20rem] h-[13rem]"
          alt=""
        />
      </td>
      <td
        scope="row"
        class="px-6 py-4 font-medium text-gray-900  dark:text-white"
      >
      
      ${e.name}
      </td>
      <td class="px-6 py-0"><span class="w-[12px]">${
        e.short_description
      }</span></td>
      <td class="px-6 py-4">${e.original_price}</td>
      <td class="px-6 py-4">${e.list_price}</td>
      <td class="px-6 py-4">${e.rating_average}</td>
      <td class="px-6 py-4">${e.isHidden ? false : true}</td>
      <td
        class="px-6 py-4 flex flex-col justify-center items-center gap-3"
      >
        <a
          href="#" data-id="${e.id}"
          class="btn_edit_book font-medium text-blue-600 dark:text-blue-500 mt-12 hover:underline"
          >Edit</a
        >
        <a
          href="#" data-id="${e.id}"
          class="btn_delete_book font-medium text-red-600 dark:text-blue-500 hover:underline"
          >Delete</a
        >
      </td>
    </tr>
        `;
    });
    const notUniqueCategories = data
      .map((e) => e.categories?.name)
      .filter((item) => item !== undefined);
    const uniqueCategories = [...new Set(notUniqueCategories)];
    const notUniqueAuthors = data.map((e) => e.authors?.[0].name);
    const authorsArray = notUniqueAuthors.filter((item) => item !== undefined);
    const uniqueAuthors = [...new Set(authorsArray)];
    console.log(uniqueAuthors);
    listCategories.innerHTML = uniqueCategories.map((e) => {
      return /*html*/ `
      <option value="">${e}</option>

      `;
    });
    listAuthors.innerHTML = uniqueAuthors.map((e) => {
      return /*html*/ `
   <option value="">${e}</option>
   `;
    });
    const editBtn = document.querySelectorAll(".edit");
    const overLay = document.querySelector(".overlay");
    const btn_delete_book = document.querySelectorAll(".btn_delete_book");
    const formDeleteBook = document.querySelector(".popup_delete");
    const agreeDeleteBook = document.querySelector(".agree-delete-book");
    const openFormDeleteBook = function () {
      if (formDeleteBook) {
        formDeleteBook.classList.remove("hidden");
        overLay.classList.remove("hidden");
      }
    };
    const closeFormDeleteBook = function () {
      if (formDeleteBook) {
        formDeleteBook.classList.add("hidden");
        overLay.classList.add("hidden");
      }
    };
    if (formDeleteBook && btn_delete_book) {
      btn_delete_book.forEach((e) =>
        e.addEventListener("click", function (e) {
          if (e.target.classList.contains("btn_delete_book")) {
            e.preventDefault();
            console.log("fsd");
            openFormDeleteBook();
            let idBook = e.target.dataset.id;
            agreeDeleteBook.addEventListener("click", function (e) {
              if (e.target.classList.contains("agree-delete-book")) {
                fetch("http://localhost:3000/books/" + idBook, {
                  method: "DELETE",
                }).then(() => location.reload());
              }
            });
          }
        })
      );
    }
    if (formDeleteBook && overLay) {
      overLay.addEventListener("click", closeFormDeleteBook);
    }
    editBtn.forEach((btn) =>
      btn.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit")) {
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
};
