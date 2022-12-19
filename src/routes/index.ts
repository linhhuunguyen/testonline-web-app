import { createRouter, createWebHistory } from "vue-router";
import { HomePage, LoginPage, RegisterPage } from "@pages";

const isLogin = false;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
