import NameRouteFlowTasksEnum from "@/entities/enums/router/NameRouteFlow/Tasks/NameRouteFlowTasksEnum";
import type RouteInterface from "@/router/types/RouteInterface";
import type FlowTasksMetaRouteInterface from "@/router/Flow/Tasks/types/MetaRouteInterface";

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
