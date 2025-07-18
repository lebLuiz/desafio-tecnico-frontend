import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type RouteInterface from "@/router/types/RouteInterface";

import RouteNotFound from "@/router/NotFound";
import RouteHome from "@/router/Home";
import RouteFlow from "@/router/Flow";

const routes: Array<RouteInterface> = [RouteHome, RouteFlow, RouteNotFound];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as Array<RouteRecordRaw>,
});

export default router;
