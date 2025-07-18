<template>
  <div inline-flex rounded-lg bg-gray-50 v-bind="attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
