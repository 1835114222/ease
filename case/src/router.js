import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/about/About.vue";
import Admin from "./components/Admin.vue";
import Login from "./components/Login.vue";
import Menu from "./components/Menu.vue";
import Register from "./components/Register.vue";
// 二级路由/
import History from "./components/about/History.vue";
import Contact from "./components/about/Contact.vue";
import Ordering from "./components/about/Ordering.vue";
import Delivery from "./components/about/Delivery.vue";
// 三级路由
import Phone from "./components/about/history/Phone.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About,
      children: [
        //二级路由
        {
          path: "/history",
          component: History,
          children: [
            {
              path: "/history",
              // redirect: "/phone",
              component: Phone
            }
          ]
        },
        {
          path: "/contact",
          component: Contact
        },
        {
          path: "/ordering",
          component: Ordering
        },
        {
          path: "/delivery",
          component: Delivery
        }
      ]
    },
    {
      path: "/admin",
      name: "adminLink",
      component: Admin
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/menu",
      component: Menu
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "*", //*代表所有，上面的没有匹配到，执行*
      redirect: "/" //路径错误直接跳转到首页
    }
  ]
});
