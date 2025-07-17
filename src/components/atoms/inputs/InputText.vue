<template>
  <input
    v-bind="attrs"
    v-model="vModel"
    :class="[
      'w-full outline-none p-y-smx p-x-sm text-body3 placeholder:text-bluegray-200',
      treatedClass,
    ]"
  />
</template>

<script setup lang="ts">
import { useAttrs, inject, computed } from "vue";

const attrs = useAttrs();
const insideInputGroup = inject("insideInputGroup", false);
const vModel = defineModel<string | null>({
  required: true,
  default: null,
});

const treatedClass = computed(() =>
  insideInputGroup
    ? "border-none rounded-none"
    : "border-solid border border-bluegray-200 rounded-lg"
);
</script>
