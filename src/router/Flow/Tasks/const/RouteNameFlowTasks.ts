import RouteNameFlow from "@/router/Flow/const/RouteNameFlow";

const RouteNameFlowTasks = {
  TASKS_OPEN: `${RouteNameFlow.TASKS}.OPEN`,
  TASKS_FINALIZED: `${RouteNameFlow.TASKS}.FINALIZED`,
} as const;
export default RouteNameFlowTasks;
