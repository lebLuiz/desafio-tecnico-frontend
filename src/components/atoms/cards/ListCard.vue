<template>
  <div
    inline-flex
    rounded-lg
    border-1
    border-solid
    border-bluegray-200
    bg-gray-50
    py-md
    px-lg
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>
