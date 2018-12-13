import Vue from "vue";
import Router from "vue-router";
import Form1 from "./views/Form1.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "form1",
      component: Form1
    }
  ]
});
