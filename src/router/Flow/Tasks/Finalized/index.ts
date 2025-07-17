import NameRouteFlowTasksEnum from "@/entities/enums/router/NameRouteFlow/Tasks/NameRouteFlowTasksEnum";
import type RouteInterface from "@/entities/interfaces/router/RouteInterface";
import type FlowTasksMetaRouteInterface from "@/entities/interfaces/router/Flow/Tasks/MetaRouteInterface";

export default {
  name: NameRouteFlowTasksEnum.TASKS_FINALIZED,
  path: "/flow/tasks/finalized",
  component: () =>
    import(
      /* webpackChunkName: "FlowTasks" */ "@/pages/Flow/Tasks/Finalized/index.vue"
    ),
  meta: {
    label: "Finalizadas",
    tab: "finalized",
  },
} as RouteInterface & { meta: FlowTasksMetaRouteInterface };
