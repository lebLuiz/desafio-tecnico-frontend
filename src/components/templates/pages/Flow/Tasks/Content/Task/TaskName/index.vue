<template>
  <section flex flex-col gap-y-3 flex-1>
    <article flex flex-col>
      <small text-desc text-fonts-regular-400>Fluxo</small>
      <p
        text-body4
        text-fonts-semibold-600
        truncate
        sm:max-w-md
        max-w-xs
        m-0
        :title="props.strAutomationName"
      >
        {{ props.strAutomationName }}
      </p>
    </article>

    <article flex flex-col>
      <small text-desc text-fonts-regular-400>Nome da etapa</small>
      <p
        text-body4
        text-fonts-semibold-600
        truncate
        sm:max-w-md
        max-w-xs
        m-0
        :title="props.strStepName"
      >
        {{ props.strStepName }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import type TaskNamePropsInterface from "@/components/templates/pages/Flow/Tasks/content/Task/TaskName/types/PropsInterface";
const props = defineProps<TaskNamePropsInterface>();
</script>
