const Cart = function (book) {
  return /*html*/ `
    <div class="flex flex-col gap-[3rem] font-roboto hover:cursor-pointer">
        <span>
          <img class="w-[12rem] transition hover:scale-110 h-[12rem]" src="${book.images[0].base_url}" alt="" />
        </span>
        <div class="flex flex-col gap-[0.44rem]">
          <span class="transition hover:text-dodgerblue hover:underline">${book.categories.name}</span>
          <span class="items-center justify-center">
            <img src="sao.svg" alt="" />
            <img src="sao.svg" alt="" />
            <img src="sao.svg" alt="" />
            <img src="sao.svg" alt="" />
            <img src="sao.svg" alt="" />
            <span
              class="text-xs text-[#787878] tracking-wide border-solid border-r-0 border-t-0 border-b-0 pl-[0.3rem]"
              >Đã bán 1000+</span
            >
          </span>
          <span class="text-[#FF424E]"
            >${book.current_seller.price} ₫
            <span
              class="text-smi rounded-md bg-[#FFF0F1] px-[0.25rem] border-solid border-red-600"
            >
              -23%</span
            ></span
          >
          <img src="giehon.svg" class="w-[7.75rem] h-[1.25rem]" alt="" />
        </div>
      </div> 
        `;
};
export default Cart;
