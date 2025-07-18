import NameRouteFlowTasksEnum from "@/router/shared/enums/NameRouteFlow/Tasks/NameRouteFlowTasksEnum";
import type RouteInterface from "@/router/shared/types/RouteInterface";
import type FlowTasksMetaRouteInterface from "@/router/Flow/Tasks/types/MetaRouteInterface";

export default {
  name: NameRouteFlowTasksEnum.TASKS_OPEN,
  path: "/flow/tasks/open",
  component: () =>
    import(
      /* webpackChunkName: "FlowTasks" */ "@/pages/Flow/Tasks/Open/index.vue"
    ),
  meta: {
    label: "Abertas",
    tab: "open",
  },
} as RouteInterface & { meta: FlowTasksMetaRouteInterface };
