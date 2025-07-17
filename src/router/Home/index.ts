import NameRouteEnum from "@/entities/enums/router/NameRouteEnum";
import type RouteInterface from "@/entities/interfaces/router/RouteInterface";

export default {
  name: NameRouteEnum.HOME,
  path: "/",
  redirect: { name: NameRouteEnum.FLOW },
  meta: {
    label: "Início",
  },
} as RouteInterface;
