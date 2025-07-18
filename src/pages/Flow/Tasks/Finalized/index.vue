<template>
  <SectionTasks>
    <header
      class="flex flex-col items-center justify-between gap-y-4 mb-4 px-5"
    >
      <HeaderInfoBanner
        title="Área de tarefas finalizadas"
        description="Aqui vão aparecer as tarefas finalizadas por você."
      />

      <BoxInputSearch
        v-model="searchValue"
        :placeholder="PLACEHOLDER_INPUT_SEARCH"
      />
    </header>

    <div w-full flex flex-col>
      <ContentInfoBanner :quantity-tasks="quantityFinalizedTasks" />
      <div v-if="!quantityFinalizedTasks" flex items-center justify-center py>
        <div i-mdi:no color-red size-4 />
        <span
          text-body3
          text-fonts-semibold-600
          v-text="TEXTO_TAREFAS_NAO_ENCONTRADAS"
        />
      </div>
      <Task
        v-else
        v-for="(task, index) in finalizedTasks"
        :key="task.id"
        :class="index !== 0 ? 'mt-4' : ''"
        :task="task"
      />
    </div>

    <Paginator
      :current-page="currentPage"
      :total-pages="quantityPagesFinalizedTasks"
      @on-page="handleSeeMore"
    />
  </SectionTasks>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import type { AxiosResponse } from "axios";
import SectionTasks from "@/components/templates/pages/Flow/Tasks/SectionTasks/index.vue";
import BoxInputSearch from "@/components/organisms/form/BoxInputSearch/index.vue";
import HeaderInfoBanner from "@/components/templates/pages/Flow/Tasks/header/InfoBanner/index.vue";
import ContentInfoBanner from "@/components/templates/pages/Flow/Tasks/content/InfoBanner/index.vue";
import Task from "@/components/templates/pages/Flow/Tasks/content/Task/index.vue";
import Paginator from "@/components/molecules/Paginator/index.vue";
import type TaskIndexResponseInterface from "@/domain/tasks/types/res/IndexResInterface";

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

const finishedTasks = ref<TaskIndexResponseInterface | null>(null);
const canceledTasks = ref<TaskIndexResponseInterface | null>(null);

const tasks = computed(() => [
  ...(finishedTasks.value?.data || []),
  ...(canceledTasks.value?.data || []),
]);
const finalizedTasks = computed(() => handleFilterTasks(tasks.value));
const quantityFinalizedTasks = computed(() => finalizedTasks.value.length);
const quantityPagesFinalizedTasks = computed(() => {
  if (Number(finishedTasks.value?.pages) > Number(canceledTasks.value?.pages))
    return finishedTasks.value?.pages || 0;
  return canceledTasks.value?.pages || 0;
});

const handleFetchTasksFinished = async (
  promises: Array<Promise<AxiosResponse<TaskIndexResponseInterface>>>,
  shouldFetchFinished: boolean
): Promise<void> => {
  if (shouldFetchFinished) {
    promises.push(
      taskService.getTasksFinished({
        page: currentPage.value,
        limit: limitTasks.value,
      })
    );
    return;
  }

  finishedTasks.value = {
    ...finishedTasks.value,
    data: [],
  } as TaskIndexResponseInterface;
};

const handleFetchTasksCanceled = async (
  promises: Array<Promise<AxiosResponse<TaskIndexResponseInterface>>>,
  shouldFetchCanceled: boolean
): Promise<void> => {
  if (shouldFetchCanceled) {
    promises.push(
      taskService.getTasksCanceled({
        page: currentPage.value,
        limit: limitTasks.value,
      })
    );
    return;
  }

  canceledTasks.value = {
    ...canceledTasks.value,
    data: [],
  } as TaskIndexResponseInterface;
};

const getFinalizedTasks = async () => {
  try {
    const promises: Promise<AxiosResponse<TaskIndexResponseInterface>>[] = [];

    const shouldFetchFinished =
      !finishedTasks.value?.pages ||
      currentPage.value <= finishedTasks.value.pages;

    const shouldFetchCanceled =
      !canceledTasks.value?.pages ||
      currentPage.value <= canceledTasks.value.pages;

    handleFetchTasksFinished(promises, shouldFetchFinished);
    handleFetchTasksCanceled(promises, shouldFetchCanceled);

    const results = await Promise.all(promises);

    let resultIndex = 0;
    if (shouldFetchFinished) finishedTasks.value = results[resultIndex++].data;
    if (shouldFetchCanceled) canceledTasks.value = results[resultIndex].data;
  } catch (e) {
    mockServerError.value = e;
  }
};

const handleSeeMore = async ({ page }: { page: number }) => {
  if (page > quantityPagesFinalizedTasks.value) return;
  currentPage.value = page;
  await getFinalizedTasks();
};

onMounted(async () => {
  await getFinalizedTasks();
});
</script>
