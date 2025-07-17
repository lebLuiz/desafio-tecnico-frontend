import NameRouteFlowEnum from "@/entities/enums/router/NameRouteFlow/NameRouteFlowEnum";

enum NameRouteFlowTasksEnum {
  TASKS_OPEN = `${NameRouteFlowEnum.TASKS}.OPEN`,
  TASKS_FINALIZED = `${NameRouteFlowEnum.TASKS}.FINALIZED`,
}

export default NameRouteFlowTasksEnum;
