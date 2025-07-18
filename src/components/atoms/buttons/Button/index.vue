<template>
  <button
    v-bind="attrs"
    :class="treatedClass"
    :disabled="disabled"
    @click="onClick"
  >
    <slot v-if="$slots.default" />
    <span v-else v-text="text || ''" />
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import type ButtonPropsInterface from "@/components/atoms/buttons/Button/types/PropsInterface";

const attrs = useAttrs();
const props = withDefaults(defineProps<ButtonPropsInterface>(), {
  severity: "primary",
});

const emit = defineEmits<{
  onClick: [payload: { $event: MouseEvent }];
}>();

const treatedClass = computed(() => {
  return [
    "inline-flex items-center justify-center px-md py-sm rounded-lg transition-colors border-none text-body3 font-semibold",
    props.severity === "primary" &&
      "bg-orange-100 text-fonts-bold-600 hover:bg-orange-50",
    props.severity === "secondary" &&
      "border-solid border border-blueGray-200 text-blueGray-800 bg-white hover:bg-blueGray-100",
    props.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
  ]
    .filter(Boolean)
    .join(" ");
});

const onClick = ($event: MouseEvent): void => {
  if (props.disabled) return;

  emit("onClick", {
    $event,
  });
};
</script>
