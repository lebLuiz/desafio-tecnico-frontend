import type HttpGetIndexResInterface from "@/domain/base/types/res/HttpGetIndexResInterface";
import type TaskInterface from "@/domain/tasks/types/res/index/TaskInterface";

export default interface IndexResInterface
  extends HttpGetIndexResInterface<TaskInterface> {}
