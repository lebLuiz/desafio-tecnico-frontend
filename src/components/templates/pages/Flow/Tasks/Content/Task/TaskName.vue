<template>
  <section flex flex-col gap-y-3 flex-1>
    <article flex flex-col>
      <small text-desc text-fonts-regular-400>Fluxo</small>
      <p text-body4 text-fonts-semibold-600 limit-caracteres max-w-xs m-0>
        {{ props.strAutomationName }}
      </p>
    </article>

    <article flex flex-col>
      <small text-desc text-fonts-regular-400>Nome da etapa</small>
      <p text-body4 text-fonts-semibold-600 limit-caracteres max-w-xs m-0>
        {{ props.strStepName }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  strAutomationName: string;
  strStepName: string;
}>();
</script>
