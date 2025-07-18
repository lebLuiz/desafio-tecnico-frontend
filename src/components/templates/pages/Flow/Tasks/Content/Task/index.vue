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
      :str-ste-type="props.task.str_step_type"
    />

    <TaskDate
      :ts-created-at="props.task.ts_created_at"
      :str-step-label="props.task.str_step_label"
    />

    <TaskButtons />
  </ListCard>
</template>

<script setup lang="ts">
import ListCard from "@/components/atoms/cards/ListCard.vue";
import BasicCard from "@/components/atoms/cards/BasicCard.vue";

import TaskName from "@/components/templates/pages/Flow/Tasks/Content/Task/TaskName.vue";
import TaskStatus from "@/components/templates/pages/Flow/Tasks/Content/Task/TaskStatus.vue";
import TaskDate from "@/components/templates/pages/Flow/Tasks/Content/Task/TaskDate.vue";
import TaskButtons from "@/components/templates/pages/Flow/Tasks/Content/Task/TaskButtons.vue";

import type TaskPropsInterface from "@/entities/interfaces/components/templates/pages/Flow/Tasks/Content/Task/PropsInterface";

const props = defineProps<TaskPropsInterface>();
</script>
