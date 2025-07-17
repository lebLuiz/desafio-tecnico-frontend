<template>
  <SectionTasks>
    <header
      class="flex flex-col items-center justify-between gap-y-4 mb-4 px-5"
    >
      <HeaderInfoBanner
        title="Área de tarefas abertas"
        description="Quando um fluxo iniciado por você ou por outra pessoa alcançar etapas sob sua responsabilidade, as tarefas serão exibidas aqui."
      />

      <BoxInputSearch
        v-model="searchValue"
        :placeholder="PLACEHOLDER_INPUT_SEARCH"
      />
    </header>

    <div w-full flex flex-col>
      <ContentInfoBanner :quantity-tasks="quantityOpenTasks" />
      <div v-if="!quantityOpenTasks" flex items-center justify-center py>
        <div i-mdi:no color-red size-4 />
        <span
          text-body3
          text-fonts-semibold-600
          v-text="TEXTO_TAREFAS_NAO_ENCONTRADAS"
        />
      </div>
      <Task
        v-else
        v-for="(task, index) in openTasks"
        :key="task.id"
        :class="index !== 0 ? 'mt-4' : ''"
        :task="task"
      />
    </div>

    <Paginator
      :current-page="currentPage"
      :total-pages="quantityPagesOpenTasks"
      @on-page="handleChangePage"
    />
  </SectionTasks>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import type { AxiosResponse } from "axios";
import SectionTasks from "@/components/templates/pages/Flow/Tasks/SectionTasks.vue";
import BoxInputSearch from "@/components/organisms/form/BoxInputSearch.vue";
import HeaderInfoBanner from "@/components/templates/pages/Flow/Tasks/Header/InfoBanner.vue";
import ContentInfoBanner from "@/components/templates/pages/Flow/Tasks/Content/InfoBanner.vue";
import Task from "@/components/templates/pages/Flow/Tasks/Content/Task/index.vue";
import Paginator from "@/components/molecules/Paginator.vue";
import type TaskIndexResponseInterface from "@/entities/interfaces/http/res/tasks/IndexResInterface";

import { useTasks } from "@/composables/pages/Flow/Tasks/useTasks";
const {
  PLACEHOLDER_INPUT_SEARCH,
  TEXTO_TAREFAS_NAO_ENCONTRADAS,
  taskService,
  searchValue,
  mockServerError,
  limitTasks,
  currentPage,
  handleFilterTasks,
} = useTasks();

const pendingTasks = ref<TaskIndexResponseInterface | null>(null);
const waitingTasks = ref<TaskIndexResponseInterface | null>(null);

const tasks = computed<TaskIndexResponseInterface["data"]>(() => [
  ...(pendingTasks.value?.data || []),
  ...(waitingTasks.value?.data || []),
]);
const openTasks = computed<TaskIndexResponseInterface["data"]>(() =>
  handleFilterTasks(tasks.value)
);
const quantityOpenTasks = computed<number>(() => openTasks.value.length);
const quantityPagesOpenTasks = computed<number>(() => {
  if (Number(pendingTasks.value?.pages) > Number(waitingTasks.value?.pages))
    return pendingTasks.value?.pages || 0;
  return waitingTasks.value?.pages || 0;
});

const handleFetchTasksPending = async (
  promises: Array<Promise<AxiosResponse<TaskIndexResponseInterface>>>,
  shouldFetchPending: boolean
): Promise<void> => {
  if (shouldFetchPending) {
    promises.push(
      taskService.getTasksPending({
        page: currentPage.value,
        limit: limitTasks.value,
      })
    );
    return;
  }

  pendingTasks.value = {
    ...pendingTasks.value,
    data: [],
  } as TaskIndexResponseInterface;
};

const handleFetchTasksWaiting = async (
  promises: Array<Promise<AxiosResponse<TaskIndexResponseInterface>>>,
  shouldFetchWaiting: boolean
): Promise<void> => {
  if (shouldFetchWaiting) {
    promises.push(
      taskService.getTasksWaiting({
        page: currentPage.value,
        limit: limitTasks.value,
      })
    );
    return;
  }

  waitingTasks.value = {
    ...waitingTasks.value,
    data: [],
  } as TaskIndexResponseInterface;
};

const getOpenTasks = async (): Promise<void> => {
  try {
    const promises: Promise<AxiosResponse<TaskIndexResponseInterface>>[] = [];

    const shouldFetchPending =
      !pendingTasks.value?.pages ||
      currentPage.value <= pendingTasks.value.pages;

    const shouldFetchWaiting =
      !waitingTasks.value?.pages ||
      currentPage.value <= waitingTasks.value.pages;

    handleFetchTasksPending(promises, shouldFetchPending);
    handleFetchTasksWaiting(promises, shouldFetchWaiting);

    const results = await Promise.all(promises);

    let resultIndex = 0;
    if (shouldFetchPending) pendingTasks.value = results[resultIndex++].data;
    if (shouldFetchWaiting) waitingTasks.value = results[resultIndex].data;
  } catch (e) {
    mockServerError.value = e;
  }
};

const handleChangePage = async ({ page }: { page: number }) => {
  if (page > quantityPagesOpenTasks.value) return;
  currentPage.value = page;
  await getOpenTasks();
};

onMounted(async () => {
  await getOpenTasks();
});
</script>
