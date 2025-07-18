<template>
  <div v-bind="attrs" :class="treatedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import type MessagePropsInterface from "@/components/atoms/Message/types/PropsInterface";

const attrs = useAttrs();
const props = withDefaults(defineProps<MessagePropsInterface>(), {
  severity: "success",
});

const treatedClass = computed(() => {
  return [
    "inline-flex items-center justify-center gap-x-1 h-[min-content] rounded-lg border-none text-fonts-regular-400 p-1 font-regular text-desc cursor-auto select-none",
    props.severity === "danger" && "bg-status-danger-light",
    props.severity === "warning" && "bg-status-warning-light",
    props.severity === "success" && "bg-status-success-light",
  ]
    .filter(Boolean)
    .join(" ");
});
</script>
