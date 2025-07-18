import type { AxiosPromise } from "axios";

import TaskRepository from "@/domain/tasks/TaskRepository";
import type TaskIndexRequestInterface from "@/domain/tasks/types/req/IndexReqInterface";
import type TaskIndexResponseInterface from "@/domain/tasks/types/res/IndexResInterface";

export default class TaskService {
  constructor(private _repository: TaskRepository = new TaskRepository()) {}

  getTasksPending({
    page = 1,
    limit = 10,
  }: TaskIndexRequestInterface): AxiosPromise<TaskIndexResponseInterface> {
    return this._repository.index({
      config: {
        params: this.paramsDefaultSearchTasks({
          status: "pending",
          page,
          limit,
        }),
      },
    });
  }

  getTasksWaiting({
    page = 1,
    limit = 10,
  }: TaskIndexRequestInterface): AxiosPromise<TaskIndexResponseInterface> {
    return this._repository.index({
      config: {
        params: this.paramsDefaultSearchTasks({
          status: "waiting",
          page,
          limit,
        }),
      },
    });
  }

  getTasksFinished({
    page = 1,
    limit = 10,
  }: TaskIndexRequestInterface): AxiosPromise<TaskIndexResponseInterface> {
    return this._repository.index({
      config: {
        params: this.paramsDefaultSearchTasks({
          status: "finished",
          page,
          limit,
        }),
      },
    });
  }

  getTasksCanceled({
    page = 1,
    limit = 10,
  }: TaskIndexRequestInterface): AxiosPromise<TaskIndexResponseInterface> {
    return this._repository.index({
      config: {
        params: this.paramsDefaultSearchTasks({
          status: "canceled",
          page,
          limit,
        }),
      },
    });
  }

  private paramsDefaultSearchTasks({
    page = 1,
    limit = 10,
    status,
  }: TaskIndexRequestInterface & { status: string }) {
    return {
      _page: page,
      _per_page: limit / 2,
      str_task_status: status,
    };
  }
}
