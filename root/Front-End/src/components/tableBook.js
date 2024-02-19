const TableBook = function () {
  return /*html*/ `  <div
  class="relative overflow-x-auto w-full font-roboto shadow-md sm:rounded-lg"
>
  <div
    class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4"
  >
    <div>
      <button
        id="dropdownRadioButton"
        data-dropdown-toggle="dropdownRadio"
        class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        Category
        <select class="ml-2 categories" name="" id="">
          
        </select>
      </button>
      <button
        id="dropdownRadioButton"
        data-dropdown-toggle="dropdownRadio"
        class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        Author
        <select class="ml-2 authors" name="" id="">
          
        </select>
      </button>
      <button type="button" class=" text-black  hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Tìm kiếm</button>


      <!-- Dropdown menu -->
    </div>
    <button type="button" class="btn-add-book text-black  hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Thêm sách mới</button>



    <label for="table-search" class="sr-only">Search</label>
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="table-search"
        class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for items"
      />
    </div>
  </div>
  <table
    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
  >
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th scope="col" class="px-6 py-3">Hình ảnh</th>
        <th scope="col" class="px-6 py-3">Tên sản phẩm</th>
        <th scope="col" class="px-6 py-3">Mô tả</th>
        <th scope="col" class="px-6 py-3">Giá niêm yết</th>
        <th scope="col" class="px-6 py-3">Giá khuyễn mãi</th>
        <th scope="col" class="px-6 py-3">Đánh giá</th>
        <th scope="col" class="px-6 py-3">Active</th>
        <th scope="col" class="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody class="list-all-books">
      
    </tbody>
  </table>
  <nav
    aria-label="Page navigation example"
    class="font-roboto relative right-0"
  >
    <ul
      class="inline-flex -space-x-px text-base list-none ml-[500px] h-10"
    >
      <li>
        <a
          href="#"
          class="flex items-center no-underline justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center no-underline px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center no-underline px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >2</a
        >
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          class="flex items-center justify-center no-underline px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >3</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center no-underline px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >4</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center no-underline px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >5</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center no-underline px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</div>`;
};
export default TableBook;
