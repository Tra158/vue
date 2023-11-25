import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from  "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
export default [
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/addCartSuccess",
    name:'addCartSuccess',
    component:  AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/search/:keyword?",
    name: "search",
    component: Search,
    meta: { show: true },
  },
  {
    path: "*",
    redirect: "/home",
  },
];
