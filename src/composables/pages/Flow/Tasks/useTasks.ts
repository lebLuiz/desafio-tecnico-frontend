import { ref } from "vue";
import TaskService from "@/domain/tasks/TaskService";
import type TaskInterface from "@/domain/tasks/types/res/index/TaskInterface";

export function useTasks() {
  const PLACEHOLDER_INPUT_SEARCH =
    "Busque por nome do fluxo, nome da etapa ou etiqueta";
  const TEXTO_TAREFAS_NAO_ENCONTRADAS = "Nenhuma tarefa encontrada";

  const taskService = new TaskService();

  const searchValue = ref<string>("");
  const mockServerError = ref();
  const limitTasks = ref<number>(10);
  const currentPage = ref<number>(1);

  const handleFilterTasks = (
    tasks: Array<TaskInterface>
  ): Array<TaskInterface> => {
    if (!tasks?.length) return [];

    return tasks.filter(
      ({ str_automation_name, str_step_name, str_step_label }) => {
        const search = searchValue.value?.toLowerCase();
        return (
          str_automation_name.toString().toLowerCase().includes(search) ||
          str_step_name.toString().toLowerCase().includes(search) ||
          str_step_label?.toString().toLowerCase().includes(search)
        );
      }
    );
  };

  return {
    PLACEHOLDER_INPUT_SEARCH,
    TEXTO_TAREFAS_NAO_ENCONTRADAS,
    taskService,
    searchValue,
    mockServerError,
    limitTasks,
    currentPage,
    handleFilterTasks,
  };
}
