import "../css/style.css";
import Product from "../pages/product";
import HomePage from "../pages/homePage";
import { render, router } from "./utilities";

router.on("/", function () {
  render("#app", HomePage);
});

router.on("/product", function () {
  render("#app", Product);
});

router.resolve();
