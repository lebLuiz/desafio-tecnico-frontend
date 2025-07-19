import type { TaskStatusType } from "@/domain/tasks/types/TaskStatusType";

export default interface PropsInterface {
  strTaskStatus: TaskStatusType;
  strStepType: string;
}
