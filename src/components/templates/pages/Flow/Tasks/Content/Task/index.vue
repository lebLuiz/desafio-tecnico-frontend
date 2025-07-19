<template>
  <ListCard
    inline-flex
    items-center
    gap-x-6
    gap-y-3
    justify-between
    w-full
    flex-wrap
  >
    <BasicCard severity="success" flex-col px-3 py-1>
      <div i-mdi:identifier color-blue-800 size-4 />
      {{ props.task.id }}</BasicCard
    >

    <TaskName
      :str-automation-name="props.task.str_automation_name"
      :str-step-name="props.task.str_step_name"
    />

    <TaskStatus
      :str-task-status="props.task.str_task_status"
      :str-step-type="props.task.str_step_type"
    />

    <TaskDate
      :ts-created-at="props.task.ts_created_at"
      :str-step-label="props.task.str_step_label"
    />

    <TaskButtons />
  </ListCard>
</template>

<script setup lang="ts">
import ListCard from "@/components/atoms/cards/ListCard/index.vue";
import BasicCard from "@/components/atoms/cards/BasicCard/index.vue";

import TaskName from "@/components/templates/pages/Flow/Tasks/content/Task/TaskName/index.vue";
import TaskStatus from "@/components/templates/pages/Flow/Tasks/content/Task/TaskStatus/index.vue";
import TaskDate from "@/components/templates/pages/Flow/Tasks/content/Task/TaskDate/index.vue";
import TaskButtons from "@/components/templates/pages/Flow/Tasks/content/Task/TaskButton/index.vue";

import type TaskPropsInterface from "@/components/templates/pages/Flow/Tasks/content/Task/types/PropsInterface";

const props = defineProps<TaskPropsInterface>();
</script>
