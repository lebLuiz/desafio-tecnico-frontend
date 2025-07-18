<template>
  <div v-bind="attrs" :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import type BasicCardPropsInterface from "@/components/atoms/cards/BasicCard/types/PropsInterface";

const attrs = useAttrs();
const props = withDefaults(defineProps<BasicCardPropsInterface>(), {
  severity: "success",
});

const classes = computed(() => {
  return [
    "inline-flex items-center justify-center rounded-lg border-none text-fonts-semibold-600 p-1 font-semibold text-body4",
    props.severity === "success" && "bg-bluegray-100",
  ]
    .filter(Boolean)
    .join(" ");
});
</script>
