import NameRouteEnum from "@/router/shared/enums/NameRouteEnum";
import type RouteInterface from "@/router/shared/types/RouteInterface";

export default {
  name: NameRouteEnum.HOME,
  path: "/",
  redirect: { name: NameRouteEnum.FLOW },
  meta: {
    label: "Início",
  },
} as RouteInterface;
