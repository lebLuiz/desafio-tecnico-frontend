import NameRouteEnum from "@/entities/enums/router/NameRouteEnum";
import type RouteInterface from "@/router/types/RouteInterface";

export default {
  name: NameRouteEnum.HOME,
  path: "/",
  redirect: { name: NameRouteEnum.FLOW },
  meta: {
    label: "Início",
  },
} as RouteInterface;
