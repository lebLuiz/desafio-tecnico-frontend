import NameRouteFlowEnum from "@/entities/enums/router/NameRouteFlow/NameRouteFlowEnum";
import type RouteInterface from "@/entities/interfaces/router/RouteInterface";
import RouteTasksOpen from "@/router/Flow/Tasks/Open";
import RouteTasksFinalized from "@/router/Flow/Tasks/Finalized";

export default {
  name: NameRouteFlowEnum.TASKS,
  path: "/flow/tasks",
  redirect: { name: RouteTasksOpen.name },
  component: () =>
    import(/* webpackChunkName: "FlowTasks" */ "@/pages/Flow/Tasks/index.vue"),
  meta: {
    label: "Tarefas",
  },
  children: [RouteTasksOpen, RouteTasksFinalized],
} as RouteInterface;
