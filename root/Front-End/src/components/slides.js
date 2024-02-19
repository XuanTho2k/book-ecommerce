const SlideBanner = function () {
  return /*html*/ `
  <div class="flex flex-col gap-[0.75rem] w-[60rem] h-[25rem]">
  <span class="text-lgg font-roboto">Nhà Sách Tiki</span>

  <span class="w-[55rem] h-[100%] slider">
    <span class="slide slide--1">
      <img src="baner.svg" alt="" />
    </span>
    <span class="slide slide--2">
      <img src="baner.svg" alt="" />
    </span>
    <span class="slide slide--3">
      <img src="baner.svg" alt="" />
    </span>
    <button class="slider__btn slider__btn--left">&larr;</button>
    <button class="slider__btn slider__btn--right">&rarr;</button>
    <div class="dots"></div>
  </span>
</div>`;
};
export default SlideBanner;
