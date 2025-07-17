<template>
  <section flex flex-col gap-y-3 flex-1>
    <article flex flex-col>
      <small inline-flex gap-x-1 text-desc text-fonts-regular-400
        ><div i-mdi:clock-outline color-blue-800 size-4 />
        Tarefa disponível desde</small
      >
      <p text-body3 text-fonts-semibold-600 limit-caracteres max-w-xs m-0>
        {{ dateTask }}
      </p>
    </article>

    <article flex flex-col>
      <small inline-flex gap-x-1 text-desc text-fonts-regular-400
        ><div i-mdi:tag color-blue-800 size-4 />
        Etiqueta</small
      >
      <p
        :class="[
          'text-body4 text-bluegray-200 limit-caracteres max-w-xs m-0',
          { 'text-fonts-semibold-600': props.strStepLabel },
        ]"
      >
        {{ textLabelTask }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ISO8601ToDateDefaultBrazil from "@/helpers/formatters/date/ISO8601ToDateDefaultBrazil";

const props = defineProps<{
  tsCreatedAt: string;
  strStepLabel: string | null;
}>();

const dateTask = computed(() => ISO8601ToDateDefaultBrazil(props.tsCreatedAt));
const textLabelTask = computed(() => props.strStepLabel || "Sem etiqueta");
</script>
