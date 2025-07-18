<template>
  <div
    flex
    flex-1
    items-center
    border
    border-solid
    border-bluegray-200
    rounded-lg
    overflow-hidden
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
provide("insideInputGroup", true);
</script>
