const HeaderComponent = function () {
  return /*html*/ `
  <header class="bg-[#1a94ff] px-[18rem] h-[6rem] font-roboto">
  <div class="flex flex-row gap-[8rem]">
    <div class="flex flex-col gap-[1rem]">
      <a href="/">
        <img
          class="object-fill mt-[1rem] w-[3.75rem] h-[2.5rem]"
          src="logoTiki.svg"
          alt=""
        />
      </a>
      <img src="plus.svg" alt="" />
    </div>
    <div class="flex flex-row">
      <input
        type="text"
        class="focus:outline-none rounded-md mt-[1rem] h-[2.5rem] w-[39.125rem]"
      />
      <div
        class="group flex flex-row gap-[0.5rem] py-[0.75rem] mt-[1rem] justify-center items-center h-[1.5rem] px-[1.2rem] rounded-md hover:text-black transition duration-300 bg-[#0D5CB6] w-[7.5rem]"
      >
        <img
          class="h-[1.25rem] w-[1.25rem] group-hover:transition hover:scale-150"
          src="ongnhom.svg"
          alt=""
        />
        <p
          class="text-white text-lg font-roboto w-[4.5rem] group-hover:text-black group-hover:transition hover:scale-110"
        >
          Tìm kiếm
        </p>
      </div>
      <div class="flex flex-row mt-[1rem]">
        <img
          class="h-[2rem] hover:scale-125 w-[2rem] ml-[1rem] py-[0.25rem]"
          src="person.svg"
          alt=""
        />
        <div
          class="pt-0 flex flex-col font-light gap-0 h-[1.5rem] w-[7rem] text-xs ml-[0.5rem]"
        >
          <p class="text-white btn--register cursor-pointer m-0 p-0 pt-[0.25rem] hover:underline">
            Đăng nhập / <span> Đăng ký</span>
          </p>
          <p class="text-white m-0 p-0 text-base hover:underline">
            Tài khoản
            <img
              src="retangle.svg"
              class="transition hover:rotate-180 w-[1rem] h-[1rem]"
              alt=""
            />
          </p>
        </div>
      </div>
      <div class="flex flex-row ml-[2.06rem] gap-[0.5rem] mt-[1.25rem]">
        <img
          src="cart.svg"
          class="transition  hover:rotate-45 w-[2rem] h-[2rem]"
          alt=""
        />
        <span class="text-white absolute text-xs right-[-4] bg-[#FDD835] p-1 rounded-lg">0</span>

        <p
          class="text-white text-xs font-bold w-[10rem] tracking-wide hover:underline"
        >
          Giỏ Hàng 
        </p>
      </div>
    </div>
  </div>
</header>
  `;
};

export default HeaderComponent;
