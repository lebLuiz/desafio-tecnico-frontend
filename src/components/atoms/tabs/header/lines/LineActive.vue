<template>
  <div v-bind="attrs" z-1 w-full h-0.5 bg-blue-500 />
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
