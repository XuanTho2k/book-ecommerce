const FromAddNewBook = function () {
  return /*html*/ `
  <section class="bg-white font-roboto dark:bg-gray-900">
  <div
    class="form-add-new-book w-[80rem] py-8 px-4 mx-auto max-w-2xl lg:py-16 border border-solid border-black rounded-lg hidden"
  >
    <h2
      class="mb-4 text-xl font-bold text-gray-900 border-red-100 dark:text-white"
    >
      Thêm mới sản phẩm
    </h2>
    <form class="form-submit" action="">
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="sm:col-span-2">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tên sách</label
          >
          <input
            type="text"
            name="name"
            id="book_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Nhập tên sách "
            required=""
          />
        </div>
        <div class="w-full">
          <label
            for="brand"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Giá niêm yết</label
          >
          <input
            type="text"
            name="book_price"
            id="book_price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product brand"
            required=""
          />
        </div>
        <div class="w-full">
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Giá khuyễn mãi</label
          >
          <input
            type="number"
            name="book_price-s"
            id="book_price-s"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="$2999"
            required=""
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hình ảnh</label
          >
          <input
            type="text"
            name="book_image"
            id="book_image"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Nhập tên sách "
            required=""
          />
        </div>
        <div>
        <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label>
        <select id="book_active" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      
          <option value="true">True</option>
          <option value="false">False</option>
        </select> 
        </div>
          <label
            for="item-weight"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Rating (stars)</label
          >
          <input
            type="number"
            name="rating"
            id="book_rating"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="12"
            required=""
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Mô tả</label
          >
          <textarea
            id="book_description"
            rows="8"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Your description here"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      >
        Thêm sản phẩm
      </button>
    </form>
  </div>
</section>
    `;
};

export default FromAddNewBook;
