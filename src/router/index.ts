import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type RouteInterface from "@/entities/interfaces/router/RouteInterface";

import RouteNotFound from "@/router/NotFound";
import RouteHome from "@/router/Home";
import RouteFlow from "@/router/Flow";
import MainView from "@/views/MainView.vue";

const routes: Array<RouteInterface> = [
  RouteHome,
  RouteFlow,
  RouteNotFound,
  {
    path: "/mainview",
    name: "main-view",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as Array<RouteRecordRaw>,
});

export default router;
