<template>
  <button
    border-none
    px-2
    py-1
    rounded
    hover:bg-blueGray-100
    dark:hover:bg-blueGray-200
    text-fonts-regular-400
    disabled:bg-transparent
    disabled:cursor-not-allowed
    font-regular
    text-desc
    @click="onClick"
    v-bind="attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
const emit = defineEmits<{
  onClick: [payload: { $event: MouseEvent }];
}>();
const onClick = (event: MouseEvent) => {
  emit("onClick", { $event: event });
};
</script>
