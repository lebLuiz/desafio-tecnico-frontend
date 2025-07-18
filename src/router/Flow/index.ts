import NameRouteEnum from "@/router/shared/enums/NameRouteEnum";
import NameRouteFlowEnum from "@/router/shared/enums/NameRouteFlow/NameRouteFlowEnum";
import type RouteInterface from "@/router/shared/types/RouteInterface";
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
