import NameRouteEnum from "@/entities/enums/router/NameRouteEnum";
import NameRouteFlowEnum from "@/entities/enums/router/NameRouteFlow/NameRouteFlowEnum";
import type RouteInterface from "@/entities/interfaces/router/RouteInterface";
import RouteTasks from "@/router/Flow/Tasks/index";

export default {
  name: NameRouteEnum.FLOW,
  path: "/flow",
  redirect: { name: NameRouteFlowEnum.TASKS },
  component: () => import("@/pages/Flow/index.vue"),
  meta: {
    label: "Fluxo",
  },
  children: [RouteTasks],
} as RouteInterface;
