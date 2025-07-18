import NameRouteEnum from "@/router/shared/enums/NameRouteEnum";
import type RouteInterface from "@/router/shared/types/RouteInterface";

export default {
  name: NameRouteEnum.NOT_FOUND,
  path: "/:pathMatch(.*)*",
  component: () =>
    import(/* webpackChunkName: "NotFound" */ "@/pages/NotFound/index.vue"),
} as RouteInterface;
