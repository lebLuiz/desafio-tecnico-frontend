import BaseRepository from "@/domain/base/BaseRepository";
import TaskModel from "@/domain/tasks/TaskModel";

export default class TaskRepository extends BaseRepository {
  protected _model = new TaskModel();
}
