import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TodoView from "../views/TodoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "todo",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
