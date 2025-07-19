import RouteNameFlow from "@/router/Flow/const/RouteNameFlow";
import type RouteInterface from "@/router/types/RouteInterface";
import RouteTasksOpen from "@/router/Flow/Tasks/Open";
import RouteTasksFinalized from "@/router/Flow/Tasks/Finalized";

export default {
  name: RouteNameFlow.TASKS,
  path: "/flow/tasks",
  redirect: { name: RouteTasksOpen.name },
  component: () =>
    import(/* webpackChunkName: "FlowTasks" */ "@/pages/Flow/Tasks/index.vue"),
  meta: {
    label: "Tarefas",
  },
  children: [RouteTasksOpen, RouteTasksFinalized],
} as RouteInterface;
