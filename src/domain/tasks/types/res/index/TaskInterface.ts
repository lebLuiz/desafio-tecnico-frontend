import type { TaskStatusType } from "@/entities/types/tasks/TaskStatusType";

export default interface TaskInterface {
  id: number;
  str_automation_name: string;
  str_step_name: string;
  str_task_status: TaskStatusType;
  str_step_type: string;
  ts_created_at: string;
  ts_finished_at: string;
  str_step_label: string | null;
}
