const Register = function () {
  return /*html*/ `
    <section class="hidden flex font-roboto flex-row register">
      <div class="bg-white rounded-lg w-[30rem]">
        <div class="flex flex-col items-center gap-[2rem] mb-[2rem]">
          <img src="logoTiki.svg" class="mt-[1rem] w-12 h-12" alt="" />
          <span class="font-bold text-lgg">Chào mừng đến với Tiki</span>
        </div>
        <form class="px-12 flex flex-col gap-[1rem]" action="#">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >Email của bạn</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-white w-[90%] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Mật khẩu</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Xác nhận lại mật khẩu</label
            >
            <input
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              class="text-gray-900 border-[0.1px] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                for="terms"
                class="font-light text-gray-500 dark:text-gray-300"
                >Tôi chấp nhận
                <a
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                  >Điều khoản và điều kiện</a
                ></label
              >
            </div>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Tạo mới tài khoản
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Đã có tài khoản trước đó?
            <a
              href="#"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >Đăng nhập</a
            >
          </p>
        </form>
      </div>
      <div class="bg-blue-100 rounded-lg px-5 py-7">
        <div class="flex flex-col gap-[2rem] items-center justify-center">
          <img src="tikimuangay.png" class="w-64 h-64 mt-[3rem]" alt="" />
          <span class="text-[1.2rem] text-blue-700"
            >Mua sắm tại Tiki <br />
            <span class="text-[0.96rem]">Siêu ưu đãi mỗi ngày</span>
          </span>
        </div>
      </div>
    </section>`;
};
export default Register;
