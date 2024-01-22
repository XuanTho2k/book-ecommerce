const ProductDetail = function (book) {
  return /*html*/ `
    <div class="flex flex-row gap-[0.75rem] ml-[18rem] mt-[1rem] font-roboto">
    <div
      class="flex flex-col gap-[1rem] border-solid border-[#f2f2f2] border-t-0 border-l-0 border-b-0"
    >
      <span>
        <img class="w-[27.5rem] h-[27.5rem]" src="book.svg" alt="" />
      </span>
      <span class="flex flex-row gap-[0.81rem]">
        <img class="h-[4rem] w-[4rem]" src="book.svg" alt="" />
        <img class="h-[4rem] w-[4rem]" src="book.svg" alt="" />
        <img class="h-[4rem] w-[4rem]" src="book.svg" alt="" />
        <img class="h-[4rem] w-[4rem]" src="book.svg" alt="" />
        <img class="h-[4rem] w-[4rem]" src="book.svg" alt="" />
      </span>
    </div>
    <div class="flex flex-col gap-[1rem]">
      <div class="flex flex-col gap-[0.44rem] mt-[2.75rem]">
        <span
          class="transition hover:text-dodgerblue uppercase text-[1.5rem] hover:underline"
          >${book.categories.name}</span
        >
        <span class="items-center justify-center">
          <img src="sao.svg" alt="" />
          <img src="sao.svg" alt="" />
          <img src="sao.svg" alt="" />
          <img src="sao.svg" alt="" />
          <img src="sao.svg" alt="" />
          <span class="text-base text-[#787878] tracking-wider"
            >(Xem 2942 đánh giá)</span
          >
          <span
            class="text-base text-[#787878] tracking-wide border-solid border-r-0 border-t-0 border-b-0 pl-[0.3rem]"
            >Đã bán 1000+</span
          >
        </span>
        <span
          class="text-[#FF424E] text-[2rem] border-solid bg-[#fafafa] mt-[1rem] pt-[0.75rem] border-[#fafafa] pr-[14rem] pl-[1rem] pb-[3.2rem]"
          >${book.current_seller.price} ₫
          <span class="text-[#787878] text-smi">109.000 ₫</span>
          <span
            class="text-smi rounded-md bg-[#FFF0F1] px-[0.25rem] border-solid border-red-600"
          >
            -23%</span
          ></span
        >
      </div>
      <div
        class="border-solid border-[#fafafa] border-l-0 border-r-0 border-b-0 pt-[2.6rem]"
      >
        <span class="text-[0.93rem] font-roboto">Số Lượng</span>
      </div>
      <div class="flex flex-row">
        <span>
          <img
            class="border-solid p-[0.31rem] border-[#f2f2f2]"
            src="tru.svg"
            alt=""
          />
        </span>
        <span class="border-solid border-[#f2f2f2] w-[2.5rem] h-[1.8rem]">
        </span>
        <span>
          <img
            src="cong.svg"
            class="border-solid p-[0.31rem] border-[#f2f2f2]"
            alt=""
          />
        </span>
      </div>
      <div>
        <button
          class="text-white  transition hover:scale-105 bg-[#ff3945] hover:text-[#ff3945] hover:bg-white font-roboto text-[0.9rem] px-[7.1rem] py-[0.7rem] hover:text-[2rem] border-[#ff3945] rounded-md"
        >
          Chọn Mua
        </button>
      </div>
    </div>
  </div> 
    `;
};
export default ProductDetail;
