import BaseRepository from "@/entities/domain/base/BaseRepository";
import TaskModel from "@/entities/domain/tasks/TaskModel";

export default class TaskRepository extends BaseRepository {
  protected _model = new TaskModel();
}
