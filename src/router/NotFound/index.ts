import NameRouteEnum from "@/entities/enums/router/NameRouteEnum";
import type RouteInterface from "@/router/types/RouteInterface";

export default {
  name: NameRouteEnum.NOT_FOUND,
  path: "/:pathMatch(.*)*",
  component: () =>
    import(/* webpackChunkName: "NotFound" */ "@/pages/NotFound/index.vue"),
} as RouteInterface;
