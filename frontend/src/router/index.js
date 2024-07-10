import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Market from "../views/Market.vue";
import ProductList from "../views/ProductList.vue";
import AddProduct from "../views/AddProduct.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
