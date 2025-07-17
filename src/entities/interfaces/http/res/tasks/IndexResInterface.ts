import type HttpGetIndexResInterface from "@/entities/interfaces/http/res/base/methods/HttpGetIndexResInterface";
import type TaskInterface from "@/entities/interfaces/http/res/tasks/index/TaskInterface";

export default interface IndexResInterface
  extends HttpGetIndexResInterface<TaskInterface> {}
