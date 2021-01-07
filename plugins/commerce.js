import Commerce from "@chec/commerce.js";
import Vue from "vue";

Vue.prototype.$commerce = new Commerce(
  process.env.VUE_APP_CHEC_PUBLIC_KEY,
  true
);
