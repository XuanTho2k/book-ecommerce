const Description = function (book) {
  return /*html*/ `
  <div class="font-roboto flex flex-col gap-[1.3rem] leading-6 tracking-wide ml-[17rem] mt-[3.5rem] w-[60rem] px-[1rem]">
  <span> Mô Tả Sản Phẩm </span>
  <div>
    ${book.description}
  </div>
  
  <div>
    <button
      class="border-solid border-dodgerblue rounded-md text-dodgerblue px-[3.44rem] py-[1rem] bg-white hover:text-white text-[0.815rem] hover:scale-105 ml-[21.50rem] hover:bg-dodgerblue mb-[5rem] transition"
    >
      Xem Thêm Nội Dung
    </button>
  </div>
</div>
    `;
};
export default Description;
