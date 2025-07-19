import type { RouteNameType } from "@/router/types/RouteNameType";
import type RouteInterface from "@/router/types/RouteInterface";

export default {
  name: "NOT_FOUND" as RouteNameType,
  path: "/:pathMatch(.*)*",
  component: () =>
    import(/* webpackChunkName: "NotFound" */ "@/pages/NotFound/index.vue"),
} as RouteInterface;
