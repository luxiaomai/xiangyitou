import Vue from "vue";
import VueRouter from "vue-router";
// import { getToken, setCode } from '@/utils/auth'
// import { Dialog } from 'vant'

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "index",
    meta: { title: "工作台", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/index.vue")
  },
  {
    path: "/my",
    name: "my",
    meta: { title: "个人资料修改", auth: false, keepAlive: false },
    component: () => import(/* webpackChunkName: "index" */ "../views/my.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  },
  {
    path: "/menu",
    name: "menu",
    meta: { title: "任务栏", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "menu" */ "../views/menu/menu.vue")
  },
  {
    path: "/menuOneA",
    name: "menuOneA",
    meta: { title: "投资企业", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneA.vue"
      )
  },
  {
    path: "/menuOneB",
    name: "menuOneB",
    meta: { title: "融资企业", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneB.vue"
      )
  },
  {
    path: "/menuOneC",
    name: "menuOneC",
    meta: { title: "项目信息", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneC.vue"
      )
  },
  {
    path: "/menuOneD",
    name: "menuOneD",
    meta: { title: "资金监管协议", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneD.vue"
      )
  },
  {
    path: "/menuOneE",
    name: "menuOneE",
    meta: { title: "监管账户管理", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneE.vue"
      )
  },
  {
    path: "/menuOneAMain",
    name: "menuOneAMain",
    meta: { title: "投资企业", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneAMain.vue"
      )
  },
  {
    path: "/menuOneBMain",
    name: "menuOneBMain",
    meta: { title: "投资方信息", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneBMain.vue"
      )
  },
  {
    path: "/menuOneCMain",
    name: "menuOneCMain",
    meta: { title: "项目信息", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneCMain.vue"
      )
  },
  {
    path: "/menuOneDMain",
    name: "menuOneDMain",
    meta: { title: "资金监管协议", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneDMain.vue"
      )
  },
  {
    path: "/menuOneEMain",
    name: "menuOneEMain",
    meta: { title: "监管账户管理", auth: false, keepAlive: false },
    component: () =>
      import(
        /* webpackChunkName: "menu" */ "../views/menu/menuOne/menuOneEMain.vue"
      )
  },
  {
    path: "/upcoming",
    name: "upcoming",
    meta: { title: "待办事项", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/main/upcoming.vue")
  },
  {
    path: "/done",
    name: "done",
    meta: { title: "已办事项", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/main/done.vue")
  },
  {
    path: "/doneMain",
    name: "doneMain",
    meta: { title: "印章使用", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/main/doneMain.vue")
  },
  {
    path: "/item",
    name: "item",
    meta: { title: "监管季报", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/myItem/item.vue")
  },
  {
    path: "/fahter",
    name: "fahter",
    meta: { title: "父组件", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../components/Father.vue")
  },
  {
    path: "/son",
    name: "son",
    meta: { title: "子组件", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../components/Son.vue")
  },
  {
    path: "/daughter",
    name: "daughter",
    meta: { title: "子组件1", auth: false, keepAlive: false },
    component: () =>
      import(/* webpackChunkName: "main" */ "../components/Daughter.vue")
  },
  {
    path: "/",
    redirect: "/index"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
