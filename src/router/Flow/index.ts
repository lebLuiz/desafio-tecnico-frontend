import type { RouteNameType } from "@/router/types/RouteNameType";
import RouteNameFlow from "@/router/Flow/const/RouteNameFlow";
import type RouteInterface from "@/router/types/RouteInterface";
import RouteTasks from "@/router/Flow/Tasks/index";

export default {
  name: "FLOW" as RouteNameType,
  path: "/flow",
  redirect: { name: RouteNameFlow.TASKS },
  component: () => import("@/pages/Flow/index.vue"),
  meta: {
    label: "Fluxo",
  },
  children: [RouteTasks],
} as RouteInterface;
