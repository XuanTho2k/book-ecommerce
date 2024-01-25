const Filter = function () {
  return `
    <div 
      class="flex flex-row gap-[3rem] font-roboto border-solid pt-[1.75rem] pb-[0.7rem] border-t-0 border-l-0 border-r-0 border-[#f2f2f2] ml-[38rem] filter__tab-container"
    >
      <span data-tab="1" class="hover:text-dodgerblue transition hover:scale-110 filter__tab"
        >Phổ biến</span
      >
      <span data-tab="2" class="hover:text-dodgerblue transition hover:scale-110 filter__tab"
        >Bán chạy</span
      >
      <span data-tab="3" class="hover:text-dodgerblue transition hover:scale-110 filter__tab"
        >Hàng mới</span
      >
      <span data-tab="4" class="hover:text-dodgerblue transition hover:scale-110 filter__tab"
        >Giá thấp</span
      >
      <span data-tab="5" class="hover:text-dodgerblue transition hover:scale-110 filter__tab"
        >Giá cao</span
      >
    </div>
    
    `;
};
export default Filter;
